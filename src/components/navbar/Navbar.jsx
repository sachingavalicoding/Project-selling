// Navbar.js
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaCube, FaInfo, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };



    return (
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-normal text-lg">Sachin Gavali </div>

                {/* Mobile menu button */}
                <div className="block">
                    <button
                        onClick={toggleMenu}
                        className={`text-white focus:outline-none transition-all duration-300 transform ${isMenuOpen ? 'rotate-90' : 'rotate-0'
                            }`}
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`fixed top-[3.7rem] right-0 h-full w-64 shadow-lg bg-indigo-700  z-50 overflow-y-auto transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    <div className="p-4">

                        <Link to={"/"} className="">
                            <FaHome className="inline-block mr-2" /> Home
                        </Link>
                        <Link to={"/products"} className="">
                            <FaCube className="inline-block mr-2" /> Products
                        </Link>
                        <Link to={"/addproducts"} className="">
                            <FaInfo className="inline-block mr-2" /> Add Products
                        </Link>
                        <Link to={"/contact"} className="text-white block hover:text-gray-300 transition duration-300">
                            <FaEnvelope className="inline-block mr-2" /> Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
