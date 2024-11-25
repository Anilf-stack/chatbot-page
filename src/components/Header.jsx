import { Link } from "react-router-dom";
import { FaHome, FaCogs, FaDollarSign, FaInfoCircle, FaComments } from "react-icons/fa";

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-2 text-lg font-bold">
                    <FaComments className="text-indigo-400 text-2xl" />
                    <span>ChatBot</span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="flex items-center space-x-2 hover:text-indigo-400 transition">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link to="/features" className="flex items-center space-x-2 hover:text-indigo-400 transition">
                        <FaCogs />
                        <span>Features</span>
                    </Link>
                    <Link to="/pricing" className="flex items-center space-x-2 hover:text-indigo-400 transition">
                        <FaDollarSign />
                        <span>Pricing</span>
                    </Link>
                    <Link to="/about-us" className="flex items-center space-x-2 hover:text-indigo-400 transition">
                        <FaInfoCircle />
                        <span>About Us</span>
                    </Link>
                    <Link to="/chatbox" className="flex items-center space-x-2 hover:text-indigo-400 transition">
                        <FaComments />
                        <span>Chat</span>
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="hidden md:flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent text-sm text-gray-300 outline-none"
                    />
                    <button className="text-gray-400 hover:text-indigo-400 transition">
                        <FaComments />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none hover:text-indigo-400 transition"
                        onClick={() => alert("Toggle Menu!")}
                    >
                        <FaCogs className="text-2xl" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

