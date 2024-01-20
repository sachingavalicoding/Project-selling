// components/SignUp.js
import { useState, } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';
const Signup = () => {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        await signUp(ID.unique(), email, password, name);
        navigate("/signin");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-2">
                            <FaUser className="mr-2 text-blue-500 text-xl animate-bounce" />
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Sachin Gavali"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">
                            <FaEnvelope className="mr-2 animate-bounce text-xl text-blue-500" />
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="sachin123@gmail.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800 text-sm font-medium mb-2">
                            <FaLock className="mr-2 animate-bounce text-xl text-blue-500 " />
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
                            min={8}
                            max={30}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSignUp}
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-sm text-gray-600">
                    <p>Already have an account? <Link to="/signin" className="text-blue-500">Log in here</Link>.</p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
