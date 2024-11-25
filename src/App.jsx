import { Routes, Route } from "react-router-dom"; // Importing routing components from React Router
import Home from "./components/Home"; // Importing the Home component
import Features from "./components/Features"; // Importing the Features component
import Pricing from "./components/Pricing"; // Importing the Pricing component
import AboutUs from "./components/AboutUs"; // Importing the About Us component
import MockChatbox from "./components/MockChatbox"; // Importing the MockChatbox component
import Header from "./components/Header"; // Importing the Header component
import Footer from "./components/Footer"; // Importing the Footer component

// Main Application Component
function App() {
  return (
    <>
      {/* Header Component: Displayed at the top of all pages */}
      <Header />

      {/* Main Routes Configuration */}
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the Features page */}
        <Route path="/features" element={<Features />} />

        {/* Route for the Pricing page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Route for the About Us page */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Route for the Mock Chatbox page */}
        <Route path="/chatbox" element={<MockChatbox />} />
      </Routes>

      {/* Footer Component: Displayed at the bottom of all pages */}
      <Footer />
    </>
  );
}

export default App;




