import { FaHeadset, FaChartBar, FaPlug, FaShieldAlt, FaRocket, FaCogs } from "react-icons/fa";

function Features() {
    return (
        <section className="features-section py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
                    Why Choose Us
                </h2>
                <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
                    We provide cutting-edge features to ensure a seamless experience for your business. Elevate your workflow with powerful tools and integrations.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                            <FaHeadset size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-blue-800 mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-600 text-center">
                            Get round-the-clock assistance with intelligent chatbots and live agents.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                            <FaChartBar size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-blue-800 mb-2">AI-Driven Insights</h3>
                        <p className="text-gray-600 text-center">
                            Analyze conversations to improve engagement and make data-driven decisions.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                            <FaPlug size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-blue-800 mb-2">Seamless Integration</h3>
                        <p className="text-gray-600 text-center">
                            Integrate effortlessly with platforms like WhatsApp, Facebook, and more.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                            <FaShieldAlt size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-blue-800 mb-2">Advanced Security</h3>
                        <p className="text-gray-600 text-center">
                            Your data is safe with industry-leading encryption and compliance.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                            <FaRocket size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-blue-800 mb-2">Fast Deployment</h3>
                        <p className="text-gray-600 text-center">
                            Deploy your solutions quickly with our easy-to-use tools and support.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="p-6 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-blue-600 mx-auto">
                            <FaCogs size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-center text-blue-800 mb-2">Customizable Tools</h3>
                        <p className="text-gray-600 text-center">
                            Tailor features to meet your unique business needs and preferences.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    {/* CTA Heading */}
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                        Ready to take your business to the next level?
                    </h3>
                     {/* CTA Description */}
                    <p className="text-lg text-gray-700 mb-6">
                        Join hundreds of businesses using our platform to streamline their operations.
                    </p>
                     {/* CTA Button */}
                    <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Features;





