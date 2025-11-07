import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const result = register(
                formData.name,
                formData.email,
                formData.password,
                formData.phone
            );

            if (result.success) {
                navigate('/dashboard');
            } else {
                setErrors({ general: result.error });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="container mx-auto max-w-md">
                <Card>
                    <div className="text-center mb-6">
                        <div className="text-5xl mb-4">⚖️</div>
                        <h2 className="text-3xl font-bold text-judicial-primary">Register</h2>
                        <p className="text-gray-600 mt-2">Create your judicial portal account</p>
                    </div>

                    {errors.general && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {errors.general}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Full Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            error={errors.name}
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            error={errors.email}
                        />

                        <Input
                            label="Phone Number"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+977-XXXXXXXXXX"
                            required
                            error={errors.phone}
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Minimum 6 characters"
                            required
                            error={errors.password}
                        />

                        <Input
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            required
                            error={errors.confirmPassword}
                        />

                        <div className="mb-6">
                            <label className="flex items-start">
                                <input type="checkbox" className="mt-1 mr-2" required />
                                <span className="text-sm text-gray-600">
                                    I agree to the <a href="#" className="text-judicial-primary hover:underline">Terms of Service</a> and <a href="#" className="text-judicial-primary hover:underline">Privacy Policy</a>
                                </span>
                            </label>
                        </div>

                        <Button type="submit" fullWidth>
                            Create Account
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-judicial-primary font-semibold hover:underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Register;
