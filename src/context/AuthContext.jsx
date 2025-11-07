import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login validation
        if (email && password.length >= 6) {
            const userData = {
                id: Date.now(),
                email,
                name: email.split('@')[0],
                registeredDate: new Date().toISOString(),
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return { success: true, user: userData };
        }
        return { success: false, error: 'Invalid credentials' };
    };

    const register = (name, email, password, phone) => {
        // Mock registration validation
        if (name && email && password.length >= 6 && phone) {
            const userData = {
                id: Date.now(),
                email,
                name,
                phone,
                registeredDate: new Date().toISOString(),
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return { success: true, user: userData };
        }
        return { success: false, error: 'Please fill all fields correctly' };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
