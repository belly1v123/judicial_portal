import { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const categories = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'technical', label: 'Technical Support' },
        { value: 'case', label: 'Case Related' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'complaint', label: 'Complaint' },
        { value: 'other', label: 'Other' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                category: '',
                message: ''
            });
            setSubmitted(false);
        }, 5000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-100 py-12 px-4">
                <div className="container mx-auto max-w-2xl">
                    <Card className="text-center">
                        <div className="text-6xl mb-6">✉️</div>
                        <h2 className="text-3xl font-bold text-green-600 mb-4">
                            Message Sent Successfully!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for contacting us. We will get back to you within 24-48 hours.
                        </p>
                        <Button onClick={() => setSubmitted(false)}>
                            Send Another Message
                        </Button>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <Card className="mb-8">
                    <h1 className="text-3xl font-bold text-judicial-primary mb-2">
                        Contact & Support
                    </h1>
                    <p className="text-gray-600">
                        Get in touch with us for any queries, feedback, or support
                    </p>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                    <Input
                                        label="Email Address"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        label="Phone Number"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+977-XXXXXXXXXX"
                                        required
                                    />
                                    <Select
                                        label="Category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        options={categories}
                                        required
                                    />
                                </div>

                                <Input
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Brief subject of your message"
                                    required
                                />

                                <TextArea
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Describe your query or concern in detail..."
                                    rows={6}
                                    required
                                />

                                <Button type="submit" fullWidth>
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">📍</div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Address</p>
                                        <p className="text-gray-600 text-sm">
                                            Supreme Court Complex<br />
                                            Ramshahpath, Kathmandu<br />
                                            Nepal
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">📞</div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Phone</p>
                                        <p className="text-gray-600 text-sm">
                                            Toll Free: 1660-01-08000<br />
                                            Office: +977-1-4200000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">📧</div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Email</p>
                                        <p className="text-gray-600 text-sm">
                                            info@judicial.gov.np<br />
                                            support@judicial.gov.np
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">🕒</div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Office Hours</p>
                                        <p className="text-gray-600 text-sm">
                                            Sunday - Friday<br />
                                            10:00 AM - 5:00 PM<br />
                                            (Closed on Saturdays & Public Holidays)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-judicial-primary hover:underline flex items-center">
                                        <span className="mr-2">📖</span>
                                        User Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-judicial-primary hover:underline flex items-center">
                                        <span className="mr-2">❓</span>
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-judicial-primary hover:underline flex items-center">
                                        <span className="mr-2">🔧</span>
                                        Technical Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-judicial-primary hover:underline flex items-center">
                                        <span className="mr-2">💬</span>
                                        Live Chat
                                    </a>
                                </li>
                            </ul>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Emergency Helpline
                            </h3>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-sm text-gray-700 mb-2">
                                    For urgent legal matters or emergencies:
                                </p>
                                <p className="text-2xl font-bold text-red-600">
                                    100
                                </p>
                                <p className="text-xs text-gray-600 mt-2">
                                    Available 24/7
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
