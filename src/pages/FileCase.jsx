import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { caseService } from '../services/api';
import Card from '../components/Card';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const FileCase = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [formData, setFormData] = useState({
        complainant: user?.name || '',
        complainantEmail: user?.email || '',
        complainantPhone: '',
        complainantAddress: '',
        respondent: '',
        respondentAddress: '',
        caseType: '',
        description: '',
        documents: null
    });

    const caseTypes = [
        { value: 'Civil', label: 'Civil Case' },
        { value: 'Criminal', label: 'Criminal Case' },
        { value: 'Administrative', label: 'Administrative Case' },
        { value: 'Labor', label: 'Labor Dispute' },
        { value: 'Family', label: 'Family Law' },
        { value: 'Property', label: 'Property Dispute' },
        { value: 'Consumer', label: 'Consumer Rights' },
        { value: 'Other', label: 'Other' }
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            alert('Please login to file a case');
            navigate('/login');
            return;
        }

        setLoading(true);

        try {
            const result = await caseService.fileCase(formData);

            if (result.success) {
                setSuccess(result.case);
                // Reset form
                setFormData({
                    complainant: user?.name || '',
                    complainantEmail: user?.email || '',
                    complainantPhone: '',
                    complainantAddress: '',
                    respondent: '',
                    respondentAddress: '',
                    caseType: '',
                    description: '',
                    documents: null
                });
            }
        } catch (error) {
            alert('Error filing case. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gray-100 py-12 px-4">
                <div className="container mx-auto max-w-2xl">
                    <Card>
                        <div className="text-center">
                            <div className="text-6xl mb-6">✅</div>
                            <h2 className="text-3xl font-bold text-green-600 mb-4">
                                Case Filed Successfully!
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Your case has been registered in our system.
                            </p>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                                <h3 className="font-bold text-xl text-judicial-primary mb-2">
                                    Case Reference Number
                                </h3>
                                <p className="text-3xl font-bold text-gray-800">
                                    {success.id}
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Please save this number for future reference
                                </p>
                            </div>

                            <div className="text-left bg-gray-50 rounded-lg p-6 mb-6">
                                <h4 className="font-bold text-lg mb-3">Case Details:</h4>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-semibold">Complainant:</span> {success.complainant}</p>
                                    <p><span className="font-semibold">Respondent:</span> {success.respondent}</p>
                                    <p><span className="font-semibold">Case Type:</span> {success.caseType}</p>
                                    <p><span className="font-semibold">Filed Date:</span> {new Date(success.filedDate).toLocaleDateString()}</p>
                                    <p><span className="font-semibold">Status:</span> {success.status}</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button onClick={() => navigate('/dashboard')}>
                                    Go to Dashboard
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => navigate(`/track-case?id=${success.id}`)}
                                >
                                    Track This Case
                                </Button>
                                <Button variant="secondary" onClick={() => setSuccess(null)}>
                                    File Another Case
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <Card>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-judicial-primary mb-2">
                            File a New Case
                        </h1>
                        <p className="text-gray-600">
                            Fill in the details below to register your case. All fields marked with * are required.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Complainant Details */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-judicial-primary">
                                Complainant Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    label="Full Name"
                                    name="complainant"
                                    value={formData.complainant}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />
                                <Input
                                    label="Email Address"
                                    type="email"
                                    name="complainantEmail"
                                    value={formData.complainantEmail}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                                <Input
                                    label="Phone Number"
                                    type="tel"
                                    name="complainantPhone"
                                    value={formData.complainantPhone}
                                    onChange={handleChange}
                                    placeholder="+977-XXXXXXXXXX"
                                    required
                                />
                                <Input
                                    label="Address"
                                    name="complainantAddress"
                                    value={formData.complainantAddress}
                                    onChange={handleChange}
                                    placeholder="City, District"
                                    required
                                />
                            </div>
                        </div>

                        {/* Respondent Details */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-judicial-primary">
                                Respondent Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    label="Full Name / Organization"
                                    name="respondent"
                                    value={formData.respondent}
                                    onChange={handleChange}
                                    placeholder="Name of the respondent"
                                    required
                                />
                                <Input
                                    label="Address"
                                    name="respondentAddress"
                                    value={formData.respondentAddress}
                                    onChange={handleChange}
                                    placeholder="City, District"
                                    required
                                />
                            </div>
                        </div>

                        {/* Case Details */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-judicial-primary">
                                Case Details
                            </h2>

                            <Select
                                label="Case Type"
                                name="caseType"
                                value={formData.caseType}
                                onChange={handleChange}
                                options={caseTypes}
                                required
                            />

                            <TextArea
                                label="Case Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Provide a detailed description of your case, including relevant facts and circumstances..."
                                rows={6}
                                required
                            />

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">
                                    Supporting Documents
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-judicial-primary transition-colors">
                                    <input
                                        type="file"
                                        name="documents"
                                        onChange={handleChange}
                                        className="hidden"
                                        id="file-upload"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    />
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                        <div className="text-4xl mb-2">📎</div>
                                        <p className="text-gray-600 mb-1">
                                            Click to upload documents
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                                        </p>
                                        {formData.documents && (
                                            <p className="text-sm text-judicial-primary font-semibold mt-2">
                                                Selected: {formData.documents.name}
                                            </p>
                                        )}
                                    </label>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    Note: This is a mock upload. In production, files would be uploaded to a server.
                                </p>
                            </div>
                        </div>

                        {/* Declaration */}
                        <div className="mb-6">
                            <label className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-3" required />
                                <span className="text-sm text-gray-600">
                                    I hereby declare that the information provided above is true and correct to the best of my knowledge.
                                    I understand that providing false information may result in legal consequences.
                                </span>
                            </label>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button type="submit" disabled={loading} className="flex-1">
                                {loading ? 'Filing Case...' : 'Submit Case'}
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => navigate('/')}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default FileCase;
