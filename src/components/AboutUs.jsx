import { FaRobot, FaUsers, FaGlobe } from "react-icons/fa";
import aboutImage from "../assets/about.png";

function AboutUs() {
    return (
        <section id="about-us" className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                 {/* Header Section */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-6">About Us</h2>
                <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    We specialize in creating cutting-edge chatbot solutions designed to revolutionize how businesses engage with their customers. 
                    With our AI-powered chatbots, we help companies enhance customer satisfaction, increase efficiency, and achieve their goals.
                </p>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {/* Feature 1 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                            <FaRobot className="text-blue-600 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">AI-Driven Technology</h3>
                        <p className="text-gray-600">
                            Powered by the latest advancements in AI, our chatbots offer intelligent and dynamic interactions.
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                            <FaUsers className="text-blue-600 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Customer-Centric Approach</h3>
                        <p className="text-gray-600">
                            We design chatbots tailored to your unique business needs to enhance customer engagement.
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                            <FaGlobe className="text-blue-600 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Global Reach</h3>
                        <p className="text-gray-600">
                            Serving businesses worldwide, we help you connect with customers across borders.
                        </p>
                    </div>
                </div>

                {/* Image and CTA */}
                <div className="mt-16 flex flex-col sm:flex-row items-center gap-8">
                    <img
                        src={aboutImage}
                        alt="Chatbot Illustration"
                        className="w-full sm:w-1/2 rounded-lg shadow-lg"
                    />
                    <div className="text-left max-w-lg">
                        <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                        <p className="text-gray-700 mb-6">
                            To empower businesses with AI-driven tools that redefine customer interactions. Our team is dedicated to helping you
                            achieve seamless communication, boost productivity, and grow your business.
                        </p>
                        <a
                            href="/contact"
                            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;

