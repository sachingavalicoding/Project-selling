// components/SignIn.js
import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        // await login(email, password);
        // Redirect or perform additional actions after login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">
                            <FaEnvelope className="mr-2" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="sachin@gmail.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800 text-sm font-medium mb-2">
                            <FaLock className="mr-2" />
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-sm text-gray-600">
                    <p>Do not have an account? <Link to="/signup" className="text-blue-500">Sign up here</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
