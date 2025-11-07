import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { caseService, notificationService } from '../services/api';
import Card from '../components/Card';
import Loading from '../components/Loading';

const Dashboard = () => {
    const { user } = useAuth();
    const [cases, setCases] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const [userCases, userNotifications] = await Promise.all([
                caseService.getUserCases(user?.id),
                notificationService.getNotifications()
            ]);
            setCases(userCases);
            setNotifications(userNotifications);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading message="Loading your dashboard..." />;
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Under Review':
                return 'bg-yellow-100 text-yellow-800';
            case 'Hearing Scheduled':
                return 'bg-blue-100 text-blue-800';
            case 'Verdict Announced':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'success':
                return '✅';
            case 'warning':
                return '⚠️';
            case 'info':
                return 'ℹ️';
            default:
                return '📢';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome back, {user?.name || 'User'}!
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Here's an overview of your judicial portal activity
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <h3 className="text-lg font-semibold mb-2">Total Cases</h3>
                        <p className="text-4xl font-bold">{cases.length}</p>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                        <h3 className="text-lg font-semibold mb-2">Active Cases</h3>
                        <p className="text-4xl font-bold">
                            {cases.filter(c => c.status !== 'Verdict Announced').length}
                        </p>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                        <p className="text-4xl font-bold">{notifications.length}</p>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                        <h3 className="text-lg font-semibold mb-2">Unread</h3>
                        <p className="text-4xl font-bold">
                            {notifications.filter(n => !n.read).length}
                        </p>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* My Cases */}
                    <div className="lg:col-span-2">
                        <Card>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">My Cases</h2>
                                <Link
                                    to="/file-case"
                                    className="text-judicial-primary hover:underline font-semibold"
                                >
                                    File New Case →
                                </Link>
                            </div>

                            {cases.length > 0 ? (
                                <div className="space-y-4">
                                    {cases.map((caseItem) => (
                                        <div
                                            key={caseItem.id}
                                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="font-bold text-lg text-judicial-primary">
                                                        {caseItem.id}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm">
                                                        {caseItem.complainant} vs {caseItem.respondent}
                                                    </p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(caseItem.status)}`}>
                                                    {caseItem.status}
                                                </span>
                                            </div>

                                            <p className="text-gray-700 mb-3">{caseItem.description}</p>

                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">
                                                    Filed: {new Date(caseItem.filedDate).toLocaleDateString()}
                                                </span>
                                                {caseItem.nextHearing && (
                                                    <span className="text-judicial-primary font-semibold">
                                                        Next Hearing: {new Date(caseItem.nextHearing).toLocaleDateString()}
                                                    </span>
                                                )}
                                            </div>

                                            <Link
                                                to={`/track-case?id=${caseItem.id}`}
                                                className="mt-3 inline-block text-judicial-primary hover:underline font-semibold"
                                            >
                                                View Details →
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-600 mb-4">You haven't filed any cases yet</p>
                                    <Link
                                        to="/file-case"
                                        className="btn-primary inline-block"
                                    >
                                        File Your First Case
                                    </Link>
                                </div>
                            )}
                        </Card>
                    </div>

                    {/* Notifications */}
                    <div className="lg:col-span-1">
                        <Card>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>

                            {notifications.length > 0 ? (
                                <div className="space-y-3">
                                    {notifications.slice(0, 5).map((notification) => (
                                        <div
                                            key={notification.id}
                                            className={`p-3 rounded-lg border ${notification.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}
                                        >
                                            <div className="flex items-start">
                                                <span className="text-2xl mr-3">
                                                    {getNotificationIcon(notification.type)}
                                                </span>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-sm text-gray-800">
                                                        {notification.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-600 mt-1">
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-2">
                                                        {new Date(notification.date).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600 text-center py-8">No notifications</p>
                            )}
                        </Card>

                        {/* Quick Actions */}
                        <Card className="mt-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <Link
                                    to="/file-case"
                                    className="block w-full text-left px-4 py-3 bg-judicial-primary text-white rounded-lg hover:bg-judicial-dark transition-colors"
                                >
                                    📝 File a New Case
                                </Link>
                                <Link
                                    to="/track-case"
                                    className="block w-full text-left px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    🔍 Track Case Status
                                </Link>
                                <Link
                                    to="/judgments"
                                    className="block w-full text-left px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    ⚖️ View Judgments
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
