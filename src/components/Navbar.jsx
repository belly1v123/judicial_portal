import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-judicial-primary text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo and Brand */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="text-3xl">⚖️</div>
                        <div>
                            <h1 className="text-xl font-bold">National Judicial Portal</h1>
                            <p className="text-xs text-blue-200">e-Governance Initiative</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/"
                            className={`hover:text-blue-200 transition-colors ${isActive('/') ? 'text-blue-200 font-semibold' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/file-case"
                            className={`hover:text-blue-200 transition-colors ${isActive('/file-case') ? 'text-blue-200 font-semibold' : ''}`}
                        >
                            File Case
                        </Link>
                        <Link
                            to="/track-case"
                            className={`hover:text-blue-200 transition-colors ${isActive('/track-case') ? 'text-blue-200 font-semibold' : ''}`}
                        >
                            Track Case
                        </Link>
                        <Link
                            to="/judgments"
                            className={`hover:text-blue-200 transition-colors ${isActive('/judgments') ? 'text-blue-200 font-semibold' : ''}`}
                        >
                            Judgments
                        </Link>
                        <Link
                            to="/legal-resources"
                            className={`hover:text-blue-200 transition-colors ${isActive('/legal-resources') ? 'text-blue-200 font-semibold' : ''}`}
                        >
                            Legal Help
                        </Link>
                        <Link
                            to="/contact"
                            className={`hover:text-blue-200 transition-colors ${isActive('/contact') ? 'text-blue-200 font-semibold' : ''}`}
                        >
                            Contact
                        </Link>

                        {user ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className={`hover:text-blue-200 transition-colors ${isActive('/dashboard') ? 'text-blue-200 font-semibold' : ''}`}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logout}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-white text-judicial-primary hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-colors"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
