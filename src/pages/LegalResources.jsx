import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const LegalResources = () => {
    const [activeTab, setActiveTab] = useState('faq');

    const faqs = [
        {
            question: "How do I file a case online?",
            answer: "To file a case online, log in to your account, navigate to 'File Case', fill in the required details including complainant and respondent information, case type, description, and upload supporting documents. You will receive a case reference number upon successful submission."
        },
        {
            question: "What documents do I need to file a case?",
            answer: "You typically need: 1) Valid ID proof, 2) Supporting documents related to your case (contracts, agreements, evidence), 3) Address proof of both parties, 4) Any relevant correspondence. All documents should be in PDF, DOC, or image format."
        },
        {
            question: "How can I track my case status?",
            answer: "Use the 'Track Case' feature by entering your case reference number or party name. You'll see the current status, timeline of events, and next hearing date if scheduled."
        },
        {
            question: "How long does it take to process a case?",
            answer: "Processing time varies by case type and complexity. Simple civil cases may take 3-6 months, while complex cases can take longer. You'll receive updates at each stage through the portal."
        },
        {
            question: "Can I modify my case after filing?",
            answer: "Minor corrections can be made within 48 hours of filing. For major changes, you'll need to contact the court clerk or file an amendment petition."
        },
        {
            question: "Are online filings legally valid?",
            answer: "Yes, online case filings through this portal are legally valid and recognized by all courts. You'll receive official acknowledgment and case number."
        },
        {
            question: "How do I get legal aid?",
            answer: "Legal aid is available for eligible citizens. Visit the 'Legal Aid' section to check eligibility criteria and apply. Free legal consultation camps are also organized regularly."
        },
        {
            question: "Can I represent myself in court?",
            answer: "Yes, you can represent yourself (pro se representation). However, it's recommended to consult with a lawyer, especially for complex cases."
        }
    ];

    const filingSteps = [
        {
            step: 1,
            title: "Create an Account",
            description: "Register on the portal with valid email and phone number",
            icon: "👤"
        },
        {
            step: 2,
            title: "Prepare Documents",
            description: "Gather all necessary documents and evidence",
            icon: "📄"
        },
        {
            step: 3,
            title: "Fill Case Details",
            description: "Complete the online form with accurate information",
            icon: "✍️"
        },
        {
            step: 4,
            title: "Upload Documents",
            description: "Attach supporting documents (PDF, DOC, images)",
            icon: "📎"
        },
        {
            step: 5,
            title: "Review & Submit",
            description: "Verify all information and submit your case",
            icon: "✅"
        },
        {
            step: 6,
            title: "Get Case Number",
            description: "Receive your unique case reference number",
            icon: "🎫"
        }
    ];

    const acts = [
        { name: "Civil Code, 2074", year: "2017", category: "Civil Law" },
        { name: "Criminal Code, 2074", year: "2017", category: "Criminal Law" },
        { name: "Constitution of Nepal, 2072", year: "2015", category: "Constitutional" },
        { name: "Labor Act, 2074", year: "2017", category: "Labor Law" },
        { name: "Consumer Protection Act, 2075", year: "2018", category: "Consumer Rights" },
        { name: "Evidence Act, 2031", year: "1974", category: "Evidence" }
    ];

    const legalAidOffices = [
        { name: "Nepal Bar Association", location: "Kathmandu", phone: "01-4200000", email: "info@nepalbar.org" },
        { name: "Legal Aid Clinic - Supreme Court", location: "Kathmandu", phone: "01-4200100", email: "legalaid@supremecourt.gov.np" },
        { name: "Women Legal Aid Center", location: "Kathmandu", phone: "01-4300000", email: "info@wlac.org.np" },
        { name: "National Human Rights Commission", location: "Kathmandu", phone: "01-4100000", email: "info@nhrc.gov.np" }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <Card className="mb-8">
                    <h1 className="text-3xl font-bold text-judicial-primary mb-2">
                        Legal Resources & Help
                    </h1>
                    <p className="text-gray-600">
                        Access helpful information, guides, and legal resources
                    </p>
                </Card>

                {/* Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 border-b border-gray-300">
                        <button
                            onClick={() => setActiveTab('faq')}
                            className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'faq'
                                    ? 'text-judicial-primary border-b-4 border-judicial-primary'
                                    : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            📖 FAQs
                        </button>
                        <button
                            onClick={() => setActiveTab('steps')}
                            className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'steps'
                                    ? 'text-judicial-primary border-b-4 border-judicial-primary'
                                    : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            📝 Filing Steps
                        </button>
                        <button
                            onClick={() => setActiveTab('acts')}
                            className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'acts'
                                    ? 'text-judicial-primary border-b-4 border-judicial-primary'
                                    : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            ⚖️ Acts & Laws
                        </button>
                        <button
                            onClick={() => setActiveTab('legal-aid')}
                            className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'legal-aid'
                                    ? 'text-judicial-primary border-b-4 border-judicial-primary'
                                    : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            🤝 Legal Aid
                        </button>
                    </div>
                </div>

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index}>
                                <h3 className="font-bold text-lg text-gray-800 mb-3">
                                    Q{index + 1}. {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Filing Steps Tab */}
                {activeTab === 'steps' && (
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Step-by-Step Guide to Filing a Case
                        </h2>
                        <div className="space-y-6">
                            {filingSteps.map((item) => (
                                <div key={item.step} className="flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-judicial-primary text-white rounded-full flex items-center justify-center text-2xl mr-4">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-2">
                                            <span className="bg-judicial-primary text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                                                Step {item.step}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                            <h4 className="font-bold text-lg text-gray-800 mb-2">
                                💡 Helpful Tips
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Keep all original documents safe - you may need them in court</li>
                                <li>✓ Make copies of all documents before uploading</li>
                                <li>✓ Ensure all information is accurate to avoid delays</li>
                                <li>✓ Save your case reference number immediately</li>
                                <li>✓ Check your email regularly for case updates</li>
                            </ul>
                        </div>
                    </Card>
                )}

                {/* Acts & Laws Tab */}
                {activeTab === 'acts' && (
                    <div>
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Important Acts & Legal Documents
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Access key legal acts and regulations governing various aspects of law
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {acts.map((act, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-gray-800">{act.name}</h3>
                                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                                {act.year}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{act.category}</p>
                                        <div className="flex gap-2">
                                            <Button variant="secondary" className="text-sm">
                                                📖 Read
                                            </Button>
                                            <Button variant="secondary" className="text-sm">
                                                📥 Download
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Additional Resources
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-700">
                                    <span className="mr-3">📚</span>
                                    <a href="#" className="text-judicial-primary hover:underline">
                                        Legal Dictionary & Glossary
                                    </a>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="mr-3">📋</span>
                                    <a href="#" className="text-judicial-primary hover:underline">
                                        Court Rules & Procedures
                                    </a>
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="mr-3">⚖️</span>
                                    <a href="#" className="text-judicial-primary hover:underline">
                                        Landmark Judgments
                                    </a>
                                </li>
                            </ul>
                        </Card>
                    </div>
                )}

                {/* Legal Aid Tab */}
                {activeTab === 'legal-aid' && (
                    <div className="space-y-6">
                        <Card>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Free Legal Aid Services
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Legal aid is available for those who cannot afford legal representation.
                                Services include free legal consultation, court representation, and document preparation.
                            </p>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                                <h3 className="font-bold text-lg text-gray-800 mb-3">
                                    Who is Eligible?
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Annual income below NPR 200,000</li>
                                    <li>✓ Senior citizens (above 60 years)</li>
                                    <li>✓ Persons with disabilities</li>
                                    <li>✓ Women in domestic violence cases</li>
                                    <li>✓ Marginalized communities</li>
                                </ul>
                            </div>

                            <h3 className="font-bold text-xl text-gray-800 mb-4">
                                Legal Aid Offices
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {legalAidOffices.map((office, index) => (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <h4 className="font-bold text-gray-800 mb-2">{office.name}</h4>
                                        <div className="space-y-1 text-sm text-gray-600">
                                            <p>📍 {office.location}</p>
                                            <p>📞 {office.phone}</p>
                                            <p>📧 {office.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Upcoming Legal Aid Camps
                            </h3>
                            <div className="space-y-3">
                                <div className="border-l-4 border-judicial-primary pl-4 py-2">
                                    <p className="font-semibold text-gray-800">Free Legal Consultation Camp</p>
                                    <p className="text-sm text-gray-600">Feb 15-20, 2025 | All District Headquarters</p>
                                </div>
                                <div className="border-l-4 border-judicial-primary pl-4 py-2">
                                    <p className="font-semibold text-gray-800">Women's Legal Rights Workshop</p>
                                    <p className="text-sm text-gray-600">March 8, 2025 | Kathmandu</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LegalResources;
