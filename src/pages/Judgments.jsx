import { useState, useEffect } from 'react';
import { judgmentService } from '../services/api';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

const Judgments = () => {
    const [judgments, setJudgments] = useState([]);
    const [filteredJudgments, setFilteredJudgments] = useState([]);
    const [selectedJudgment, setSelectedJudgment] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJudgments();
    }, []);

    const fetchJudgments = async () => {
        try {
            const data = await judgmentService.getAllJudgments();
            setJudgments(data);
            setFilteredJudgments(data);
        } catch (error) {
            console.error('Error fetching judgments:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            setFilteredJudgments(judgments);
            return;
        }

        setLoading(true);
        try {
            const results = await judgmentService.searchJudgments(searchQuery);
            setFilteredJudgments(results);
        } catch (error) {
            console.error('Error searching judgments:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    if (selectedJudgment) {
        return (
            <div className="min-h-screen bg-gray-100 py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Card>
                        <button
                            onClick={() => setSelectedJudgment(null)}
                            className="text-judicial-primary hover:underline mb-6 flex items-center"
                        >
                            ← Back to Judgments
                        </button>

                        <div className="mb-6">
                            <span className="text-sm text-gray-600">Judgment ID: {selectedJudgment.id}</span>
                            <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                                {selectedJudgment.title}
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-judicial-primary text-white rounded-full text-sm">
                                    {selectedJudgment.category}
                                </span>
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                                    {selectedJudgment.court}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Case Number</p>
                                <p className="font-semibold text-gray-800">{selectedJudgment.caseNumber}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Date of Judgment</p>
                                <p className="font-semibold text-gray-800">
                                    {new Date(selectedJudgment.date).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Presiding Judge</p>
                                <p className="font-semibold text-gray-800">{selectedJudgment.judge}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Court</p>
                                <p className="font-semibold text-gray-800">{selectedJudgment.court}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-3">Summary</h2>
                            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                                {selectedJudgment.summary}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-3">Keywords</h2>
                            <div className="flex flex-wrap gap-2">
                                {selectedJudgment.keywords.map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                            <Button>📥 Download Full Judgment (PDF)</Button>
                            <Button variant="secondary">🖨️ Print</Button>
                            <Button variant="secondary">📧 Email</Button>
                            <Button variant="secondary">🔗 Share</Button>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <Card className="mb-8">
                    <h1 className="text-3xl font-bold text-judicial-primary mb-4">
                        Public Judgments & Orders
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Search and access public court judgments and orders
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            placeholder="Search by case number, title, or keywords..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1"
                        />
                        <Button onClick={handleSearch}>
                            🔍 Search
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setSearchQuery('');
                                setFilteredJudgments(judgments);
                            }}
                        >
                            Clear
                        </Button>
                    </div>
                </Card>

                {/* Loading State */}
                {loading && <Loading message="Loading judgments..." />}

                {/* Results */}
                {!loading && filteredJudgments.length > 0 && (
                    <div>
                        <div className="mb-4 text-gray-600">
                            Showing {filteredJudgments.length} judgment{filteredJudgments.length !== 1 ? 's' : ''}
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {filteredJudgments.map((judgment) => (
                                <Card
                                    key={judgment.id}
                                    className="hover:shadow-xl transition-shadow cursor-pointer"
                                    onClick={() => setSelectedJudgment(judgment)}
                                >
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                <span className="px-2 py-1 bg-judicial-primary text-white rounded text-xs font-semibold">
                                                    {judgment.category}
                                                </span>
                                                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                                                    {judgment.id}
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-judicial-primary">
                                                {judgment.title}
                                            </h2>

                                            <p className="text-gray-600 mb-3 line-clamp-2">
                                                {judgment.summary}
                                            </p>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                <span>📋 {judgment.caseNumber}</span>
                                                <span>⚖️ {judgment.court}</span>
                                                <span>👨‍⚖️ {judgment.judge}</span>
                                                <span>📅 {new Date(judgment.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        <div className="flex md:flex-col gap-2">
                                            <Button
                                                variant="secondary"
                                                className="text-sm"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedJudgment(judgment);
                                                }}
                                            >
                                                View Details
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                className="text-sm"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    alert('Downloading judgment...');
                                                }}
                                            >
                                                📥 Download
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* No Results */}
                {!loading && filteredJudgments.length === 0 && (
                    <Card className="text-center py-12">
                        <div className="text-6xl mb-4">📂</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            No Judgments Found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your search criteria or browse all judgments
                        </p>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default Judgments;
