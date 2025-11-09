import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

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
                    <div className="hidden lg:flex items-center space-x-6">
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
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-40 lg:hidden"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Mobile Sidebar Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-judicial-primary text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Close button */}
                    <div className="flex justify-end p-4">
                        <button onClick={closeMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu items */}
                    <div className="flex flex-col space-y-4 px-6 py-4">
                        <Link
                            to="/"
                            onClick={closeMenu}
                            className={`hover:text-blue-200 transition-colors py-2 ${isActive('/') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/file-case"
                            onClick={closeMenu}
                            className={`hover:text-blue-200 transition-colors py-2 ${isActive('/file-case') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                        >
                            File Case
                        </Link>
                        <Link
                            to="/track-case"
                            onClick={closeMenu}
                            className={`hover:text-blue-200 transition-colors py-2 ${isActive('/track-case') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                        >
                            Track Case
                        </Link>
                        <Link
                            to="/judgments"
                            onClick={closeMenu}
                            className={`hover:text-blue-200 transition-colors py-2 ${isActive('/judgments') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                        >
                            Judgments
                        </Link>
                        <Link
                            to="/legal-resources"
                            onClick={closeMenu}
                            className={`hover:text-blue-200 transition-colors py-2 ${isActive('/legal-resources') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                        >
                            Legal Help
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className={`hover:text-blue-200 transition-colors py-2 ${isActive('/contact') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                        >
                            Contact
                        </Link>

                        {user ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    onClick={closeMenu}
                                    className={`hover:text-blue-200 transition-colors py-2 ${isActive('/dashboard') ? 'text-blue-200 font-semibold border-l-4 border-blue-200 pl-2' : ''}`}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        logout();
                                        closeMenu();
                                    }}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors text-left mt-4"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="bg-white text-judicial-primary hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-colors text-center mt-4"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
