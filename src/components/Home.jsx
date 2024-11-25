import MockChatbox from "./MockChatbox";

function Home() {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
            {/* Container for the entire Hero Section */}
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Hero Heading */}
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
                    Transform Customer Interactions with AI
                </h1>
                {/* Hero Description */}
                <p className="text-lg sm:text-xl mb-10 leading-relaxed">
                    Elevate your business with AI-powered chatbots that ensure 24/7 engagement and seamless communication. Perfect for startups, SMBs, and enterprises alike.
                </p>

                {/* Call-to-Action (CTA) Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    {/* Button to navigate to the Features page */}
                    <a
                        href="/features"
                        className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-200"
                    >
                        Learn More
                    </a>
                    {/* Button to navigate to the Pricing page */}
                    <a
                        href="/pricing"
                        className="inline-block bg-blue-600 border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition duration-200"
                    >
                        View Pricing
                    </a>
                </div>
            </div>

            {/* Chatbox Section */}
            <section className="chat-section py-16 bg-gray-100 mt-16">
                {/* Container for the Chat Section */}
                <div className="max-w-5xl mx-auto px-6">
                    {/* Section Heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-8">
                        Try Our Chatbot
                    </h2>
                    {/* MockChatbox Container */}
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10">
                        {/* MockChatbox component renders the chatbot UserInterface */}
                        <MockChatbox />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;



