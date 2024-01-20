// components/Contact.js
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: '' // Clear error when user starts typing
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        let hasErrors = false;

        if (formData.name.trim() === '') {
            setErrors({
                ...errors,
                name: 'Name is required'
            });
            hasErrors = true;
        }

        if (formData.email.trim() === '') {
            setErrors({
                ...errors,
                email: 'Email is required'
            });
            hasErrors = true;
        }

        if (formData.message.trim() === '') {
            setErrors({
                ...errors,
                message: 'Message is required'
            });
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                <div className="mb-4">
                    <p className="text-gray-800 mb-2">For any inquiries or assistance, feel free to reach out to us:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            <FaEnvelope className="mr-2 text-blue-500" />
                            Email: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
                        </li>
                        {/* ... other contact details */}
                    </ul>
                </div>
                <div className="mb-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300 ${errors.name && 'border-red-500'}`}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300 ${errors.email && 'border-red-500'}`}
                                placeholder="john.doe@example.com"
                            />
                            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-800 text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 transition duration-300 ${errors.message && 'border-red-500'}`}
                                rows={4}
                                placeholder="Type your message here..."
                            />
                            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="mb-4">
                    <p className="text-gray-800 mb-2">Connect with us on social media:</p>
                    <div className="flex space-x-4">
                        {/* ... social media links */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
