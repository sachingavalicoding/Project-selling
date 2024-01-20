// Footer.js
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex space-x-4 mb-8">
                    <Link to="#">
                        <FaFacebook size={24} />
                    </Link>
                    <Link to="#" className="">
                        <FaTwitter size={24} />
                    </Link>
                    <Link to="#">
                        <FaInstagram size={24} />
                    </Link>
                    <Link to="#">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link to="#">
                        <FaGithub size={24} />
                    </Link>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                    &copy; 2024 Coding ERA  All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <Link to="/privacy-policy">
                        Privacy Policy
                    </Link>
                    <Link to="/terms-of-service">
                        Terms of Service
                    </Link>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
