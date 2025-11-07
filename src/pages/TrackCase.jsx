import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { caseService } from '../services/api';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

const TrackCase = () => {
    const [searchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('id') || '');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (searchParams.get('id')) {
            handleSearch();
        }
    }, []);

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setError('Please enter a case number or party name');
            return;
        }

        setLoading(true);
        setError('');
        setSelectedCase(null);

        try {
            const results = await caseService.searchCases(searchQuery);

            if (results.length === 0) {
                setError('No cases found matching your search criteria');
                setSearchResults([]);
            } else if (results.length === 1) {
                setSelectedCase(results[0]);
                setSearchResults([]);
            } else {
                setSearchResults(results);
            }
        } catch (err) {
            setError('Error searching for cases. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Under Review':
                return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'Hearing Scheduled':
                return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'Verdict Announced':
                return 'bg-green-100 text-green-800 border-green-300';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Search Section */}
                <Card className="mb-8">
                    <h1 className="text-3xl font-bold text-judicial-primary mb-4">
                        Track Your Case
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Enter your case number or party name to view case status and timeline
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            placeholder="Enter case number (e.g., CASE-2025-001) or party name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1"
                        />
                        <Button onClick={handleSearch} disabled={loading}>
                            {loading ? 'Searching...' : '🔍 Search'}
                        </Button>
                    </div>

                    {error && (
                        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            {error}
                        </div>
                    )}
                </Card>

                {/* Loading State */}
                {loading && <Loading message="Searching for cases..." />}

                {/* Multiple Results */}
                {!loading && searchResults.length > 1 && (
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Search Results ({searchResults.length} cases found)
                        </h2>
                        <div className="space-y-4">
                            {searchResults.map((caseItem) => (
                                <div
                                    key={caseItem.id}
                                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                                    onClick={() => {
                                        setSelectedCase(caseItem);
                                        setSearchResults([]);
                                    }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-judicial-primary">
                                                {caseItem.id}
                                            </h3>
                                            <p className="text-gray-600">
                                                {caseItem.complainant} vs {caseItem.respondent}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {caseItem.caseType} | Filed: {new Date(caseItem.filedDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(caseItem.status)}`}>
                                            {caseItem.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                )}

                {/* Case Details */}
                {!loading && selectedCase && (
                    <div className="space-y-6">
                        {/* Case Summary */}
                        <Card>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-judicial-primary mb-2">
                                        {selectedCase.id}
                                    </h2>
                                    <p className="text-xl text-gray-700">
                                        {selectedCase.complainant} <span className="text-gray-500">vs</span> {selectedCase.respondent}
                                    </p>
                                </div>
                                <span className={`px-4 py-2 rounded-full font-semibold border-2 ${getStatusColor(selectedCase.status)}`}>
                                    {selectedCase.status}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Case Type</p>
                                    <p className="font-semibold text-gray-800">{selectedCase.caseType}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Filed Date</p>
                                    <p className="font-semibold text-gray-800">
                                        {new Date(selectedCase.filedDate).toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Next Hearing</p>
                                    <p className="font-semibold text-gray-800">
                                        {selectedCase.nextHearing
                                            ? new Date(selectedCase.nextHearing).toLocaleDateString()
                                            : 'Not scheduled'}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-600 mb-2">Case Description</p>
                                <p className="text-gray-800 bg-gray-50 p-4 rounded-lg">
                                    {selectedCase.description}
                                </p>
                            </div>
                        </Card>

                        {/* Timeline */}
                        <Card>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Case Timeline</h3>

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-judicial-primary"></div>

                                {/* Timeline Items */}
                                <div className="space-y-8">
                                    {selectedCase.timeline.map((event, index) => (
                                        <div key={index} className="relative pl-12">
                                            {/* Timeline Dot */}
                                            <div className="absolute left-0 w-8 h-8 bg-judicial-primary rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>

                                            {/* Event Content */}
                                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-lg text-gray-800">
                                                        {event.event}
                                                    </h4>
                                                    <span className="text-sm text-gray-600">
                                                        {new Date(event.date).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        {/* Actions */}
                        <Card>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Actions</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button onClick={() => window.print()}>
                                    🖨️ Print Case Details
                                </Button>
                                <Button variant="secondary">
                                    📧 Email Updates
                                </Button>
                                <Button variant="secondary">
                                    📥 Download Documents
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        setSelectedCase(null);
                                        setSearchQuery('');
                                    }}
                                >
                                    ← Search Again
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Help Section */}
                {!loading && !selectedCase && searchResults.length === 0 && (
                    <Card>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Need Help Finding Your Case?
                        </h3>
                        <div className="space-y-3 text-gray-600">
                            <p>✓ Make sure you have the correct case number format (e.g., CASE-2025-001)</p>
                            <p>✓ You can also search by complainant or respondent name</p>
                            <p>✓ Case numbers are provided when you file a case</p>
                            <p>✓ If you still can't find your case, please contact support</p>
                        </div>
                        <div className="mt-6">
                            <Button onClick={() => window.location.href = '/contact'}>
                                Contact Support
                            </Button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default TrackCase;
