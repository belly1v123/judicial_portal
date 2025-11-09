import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Portal</h3>
                        <p className="text-gray-300 text-sm">
                            The National Judicial Portal is an e-governance initiative to provide
                            transparent and efficient judicial services to citizens.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/file-case" className="text-gray-300 hover:text-white">File a Case</Link></li>
                            <li><Link to="/track-case" className="text-gray-300 hover:text-white">Track Case</Link></li>
                            <li><Link to="/judgments" className="text-gray-300 hover:text-white">Judgments</Link></li>
                            <li><Link to="/legal-resources" className="text-gray-300 hover:text-white">Legal Resources</Link></li>
                        </ul>
                    </div>

                    {/* Help & Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Help & Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/legal-resources" className="text-gray-300 hover:text-white">FAQs</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">User Guide</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Legal Aid</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>📞 Toll Free: 1660-01-08000</li>
                            <li>📧 info@judicial.gov.np</li>
                            <li>📍 Supreme Court Complex, Kathmandu</li>
                            <li>🕒 Mon-Fri: 10:00 AM - 5:00 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; 2025 National Judicial Portal. All rights reserved.</p>
                    <p className="mt-2 text-gray-300">
                        Developed by: <span className="font-semibold text-white">Pranjal Kharel</span>, <span className="font-semibold text-white">Ravi Sankhar Sah</span> & <span className="font-semibold text-white">Ankit Rimal</span>
                    </p>
                    <p className="mt-2">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        {' | '}
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        {' | '}
                        <a href="#" className="hover:text-white">Accessibility</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
