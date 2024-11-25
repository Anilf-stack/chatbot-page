import { useState } from "react";
import icon1Image from "../assets/icon-1.png";
import icon2Image from "../assets/icon-2.png";
import icon3Image from "../assets/icon-3.png";

function Pricing() {
    // State to track the currently selected plan
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Pricing plans data
    const plans = [
        {
            id: "startups",
            title: "Startups",
            price: "$9/month",
            features: ["Up to 5 users", "Basic support", "Email analytics"],
        },
        {
            id: "smbs",
            title: "SMBs",
            price: "$29/month",
            features: ["Up to 20 users", "Priority support", "Advanced analytics"],
        },
        {
            id: "enterprise",
            title: "Enterprise",
            price: "$99/month",
            features: ["Unlimited users", "Dedicated account manager", "Custom integrations"],
        },
    ];

    return (
        <section id="pricing" className="py-10 bg-white">
            {/* Header Section */}
            <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
                Affordable Pricing Plans
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </p>

            {/* Pricing Plans Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        // Apply styles dynamically based on selected plan
                        className={`p-6 bg-gray-50 shadow-lg rounded-lg text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer ${
                            selectedPlan === plan.id ? "border-2 border-indigo-600" : "border-2 border-gray-200"
                        }`}
                        // Set the selected plan when clicked
                        onClick={() => setSelectedPlan(plan.id)}
                    >
                        {/* Plan Title */}
                        <h3 className="font-bold text-lg mb-4 text-indigo-600">{plan.title}</h3>
                        {/* Plan Price */}
                        <p className="text-4xl font-bold mb-4">{plan.price}</p>
                        {/* Plan Features */}
                        <ul className="text-gray-600 space-y-2 mb-6">
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        {/* Call to Action Button */}
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                            {plan.id === "enterprise" ? "Contact Sales" : "Get Started"}
                        </button>
                    </div>
                ))}
            </div>

            {/* Features Section */}
            <div className="mt-16 bg-indigo-50 py-12">
                {/* Features Header */}
                <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Why Choose Us?
                </h3>
                {/* Features Grid */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Feature 1 */}
                    <div className="text-center">
                        <img
                            src={icon1Image}
                            alt="Feature 1"
                            className="mx-auto mb-4 h-14"
                        />
                        <h4 className="font-bold text-lg mb-2">User-Friendly</h4>
                        <p className="text-gray-600">Intuitive and easy-to-use platform for everyone.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="text-center">
                        <img
                            src={icon2Image}
                            alt="Feature 2"
                            className="mx-auto mb-4 h-14"
                        />
                        <h4 className="font-bold text-lg mb-2">Secure & Reliable</h4>
                        <p className="text-gray-600">State-of-the-art security and 99.99% uptime.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="text-center">
                        <img
                            src={icon3Image}
                            alt="Feature 3"
                            className="mx-auto mb-4 h-14"
                        />
                        <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                        <p className="text-gray-600">Our team is here to help you around the clock.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-16 text-center">
                {/* CTA Heading */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to Get Started?
                </h3>
                {/* CTA Description */}
                <p className="text-gray-600 mb-6">
                    Sign up now and enjoy a 14-day free trial on any plan.
                </p>
                {/* CTA Button */}
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Try for Free
                </button>
            </div>
        </section>
    );
}

export default Pricing;
