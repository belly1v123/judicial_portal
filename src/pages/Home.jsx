import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { announcementService } from '../services/api';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        const data = await announcementService.getLatestAnnouncements(3);
        setAnnouncements(data);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-judicial-primary to-judicial-secondary text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="text-6xl mb-6">⚖️</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        National Judicial Portal
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Transparent, Accessible, and Efficient Justice for All Citizens
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/file-case">
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-judicial-primary font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                                File a Case
                            </button>
                        </Link>
                        <Link to="/track-case">
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-judicial-primary font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                                Track Your Case
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Quick Access Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link to="/file-case">
                            <Card className="text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="text-5xl mb-4">📝</div>
                                <h3 className="text-xl font-bold text-judicial-primary mb-2">File a Case</h3>
                                <p className="text-gray-600">Submit your case online with ease</p>
                            </Card>
                        </Link>

                        <Link to="/track-case">
                            <Card className="text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="text-5xl mb-4">🔍</div>
                                <h3 className="text-xl font-bold text-judicial-primary mb-2">Track Case</h3>
                                <p className="text-gray-600">Monitor your case status in real-time</p>
                            </Card>
                        </Link>

                        <Link to="/judgments">
                            <Card className="text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="text-5xl mb-4">⚖️</div>
                                <h3 className="text-xl font-bold text-judicial-primary mb-2">Judgments</h3>
                                <p className="text-gray-600">Access public court judgments</p>
                            </Card>
                        </Link>

                        <Link to="/legal-resources">
                            <Card className="text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="text-5xl mb-4">📚</div>
                                <h3 className="text-xl font-bold text-judicial-primary mb-2">Legal Help</h3>
                                <p className="text-gray-600">Get legal resources and guidance</p>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Portal Impact
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-judicial-primary mb-2">25,000+</div>
                            <p className="text-gray-600">Cases Filed Online</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-judicial-primary mb-2">15,000+</div>
                            <p className="text-gray-600">Registered Users</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-judicial-primary mb-2">5,000+</div>
                            <p className="text-gray-600">Public Judgments</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-judicial-primary mb-2">24/7</div>
                            <p className="text-gray-600">Portal Access</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Announcements Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Latest Announcements
                        </h2>
                        <a href="#" className="text-judicial-primary hover:underline font-semibold">
                            View All →
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {announcements.map((announcement) => (
                            <Card key={announcement.id}>
                                <div className="flex items-start mb-3">
                                    <span className="text-2xl mr-3">
                                        {announcement.type === 'announcement' ? '📢' :
                                            announcement.type === 'holiday' ? '🎉' : '📅'}
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800 mb-2">
                                            {announcement.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {announcement.content}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(announcement.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Use Our Portal?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-judicial-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                                🏠
                            </div>
                            <h3 className="text-xl font-bold mb-2">File From Home</h3>
                            <p className="text-gray-600">
                                No need to visit courts physically. File cases from the comfort of your home.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-judicial-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                                ⏱️
                            </div>
                            <h3 className="text-xl font-bold mb-2">Real-Time Updates</h3>
                            <p className="text-gray-600">
                                Get instant notifications about your case status and hearing dates.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-judicial-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
                                🔒
                            </div>
                            <h3 className="text-xl font-bold mb-2">Secure & Transparent</h3>
                            <p className="text-gray-600">
                                Your data is encrypted and secure. Access public records transparently.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-judicial-primary text-white py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join thousands of citizens using our digital judicial services
                    </p>
                    <Link to="/register">
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-judicial-primary font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                            Create Your Account
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
