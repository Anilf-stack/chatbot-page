import ReactDOM from "react-dom/client"; // Importing ReactDOM for rendering the React application
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for client-side routing
import App from "./App.jsx"; // Importing the main App component
import "./index.css"; // Importing global CSS styles

// Rendering the application to the root element in the HTML file
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrapping the App component with BrowserRouter for enabling routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
