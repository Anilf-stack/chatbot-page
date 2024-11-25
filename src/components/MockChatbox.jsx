import { useState } from "react";
import chatbotImage from "../assets/chatbot.png"; 

function MockChatbox() {
    
    {/*  State to manage chat messages  */}
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! How can I help you today?" },
    ]);

    {/* State to manage the current user input */}
    const [userMessage, setUserMessage] = useState("");

    {/* Function to handle sending messages */}
    const handleSend = () => {
        {/* If input is empty, show an alert and exit the function */}
        if (!userMessage.trim()) {
            alert("Please enter a message!");
            return;
        }

        {/*  Add the user's message to the chat messages array */}
        setMessages([...messages, { sender: "user", text: userMessage }]);

        {/*  Simulate a bot's response after 1 second */}
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: "I'm here to help with any queries you have!" },
            ]);
        }, 1000);

        // Clear the input field
        setUserMessage("");
    };

    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${chatbotImage})`
            }}
        >
            {/* Chatbox container */}
            <div className="absolute left-10 top-1/4 w-1/3 bg-white p-6 rounded-lg shadow-lg">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
                    Chat with Us
                </h2>

                {/* Chat Messages Section */}
                <div className="chat-messages h-64 overflow-y-auto space-y-3 mb-4 p-3 bg-gray-100 rounded-lg shadow-inner">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex items-start ${msg.sender === "bot" ? "justify-start" : "justify-end"
                                }`}
                        >
                            <div
                                className={`relative px-4 py-2 rounded-lg text-sm shadow-md max-w-[70%] ${msg.sender === "bot"
                                        ? "bg-blue-500 text-white" // Bot messages have blue background
                                        : "bg-gray-300 text-black" // User messages have gray background
                                    }`}
                            >
                                {msg.text} {/* Display the message text */}
                                <span
                                    className={`absolute -bottom-1 ${msg.sender === "bot" ? "left-2" : "right-2"
                                        } text-xs text-gray-400`}
                                >
                                    {msg.sender === "bot" ? "Bot" : "You"} {/* Sender label */}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Field and Send Button */}
                <div className="flex">
                    <input
                        type="text"
                        className="flex-1 p-3 border border-gray-300 rounded-l-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={userMessage} // Bind input value to state
                        onChange={(e) => setUserMessage(e.target.value)} // Update state on input change
                        placeholder="Type a message..."
                        aria-label="Type your message" // Accessibility label
                    />
                    <button
                        className="bg-blue-500 text-white px-6 rounded-r-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                        onClick={handleSend} // Trigger handleSend on click
                        aria-label="Send message" // Accessibility label
                    >
                        Send
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MockChatbox;





