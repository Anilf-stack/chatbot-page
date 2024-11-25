### Overview

This project is an AI-powered chatbot platform designed to enhance customer interactions through intelligent automation. It provides businesses with a seamless way to integrate chatbots into their operations, offering features like 24/7 support, AI-driven insights, and customizable solutions.

The platform includes a user-friendly website with multiple pages such as Home, Features, Pricing, About Us, and a functional Chatbox. Built with ReactJS, it leverages modern tools like react-router-dom for routing and TailwindCSS for styling.

## Features

 # Home Page:
 - A welcoming hero section with a call-to-action for users.
 - Information about how the platform can transform customer interactions.
 - Interactive chatbot section to showcase functionality..

# Features Page:
 - Highlights the unique selling points of the platform, such as:
   - 24/7 customer support.
   - AI-driven insights.
   - Seamless integrations with other platforms.
   - Advanced security and customizable tools.

# Pricing Page:
 - Displays pricing plans tailored for startups, SMBs, and enterprises.
 - An additional section showcasing why users should choose the platform.
 - Call-to-action for trying a free trial.

# About Us Page:
 - Overview of the company's vision, mission, and values.
 - Insights into the team and how the platform was developed.

# Chatbox:
 - A mock chatbox simulating real-time interaction between users and the bot.
 - User-friendly interface with automated bot responses.

# Header and Footer:
 - Consistent navigation bar (Header) with links to all major pages.
 - Footer containing useful links, company details, and a copyright notice.


## Technologies Used

 # Frontend:
 - ReactJS: Component-based UI development.
 - React Router: For client-side routing.
 - TailwindCSS: Utility-first CSS framework for modern designs.

 # Assets:
 - Icons: React icons for feature illustrations.
 - Images: Custom images for branding and features.

 # State Management:
 - React useState for managing chatbox messages.

## Installation & Setup

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


 # Table of Contents
 - Prerequisites
 - Installation
 - Setup
 - File Structure
 - Running the Application
 - Build and Deployment

 1. Prerequisites
 - Ensure you have the following tools installed before setting up the project:

 - Node.js: Download and install
 - npm or yarn: Comes with Node.js, or install Yarn separately.
 - Verify installation by running:
 - node -v 
 - npm -v

 2. Installation
 - Install dependencies:
 - npm install

 3. Setup
 Step 1: Create the Project Using Vite.js
  - This project uses Vite.js for a fast and efficient development experience.
  - If starting fresh, create a new Vite project with the React template:
  - npm create vite@latest my-project-name -- --template react
  - Navigate to the project directory and install dependencies:
     - cd my-project-name
     - npm install
 Step 2: Add TailwindCSS
  - TailwindCSS is used for styling.
  - Install TailwindCSS and its required dependencies:
  - Copy code
    - npm install tailwindcss postcss autoprefixer -D
  - Initialize the TailwindCSS configuration:  
  - Copy code
    - npx tailwindcss init -p
  - Update tailwind.config.js: 
   - javascript
   - Copy code
       export default {
        content: [
            "./index.html",
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        };
 - Add Tailwind directives to index.css:
 - Copy code
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

Step 3: Add React Router DOM
 - React Router DOM is used for client-side routing.
    - Install React Router DOM:
    - Copy code
    - npm install react-router-dom


## Project Structure

src/
├── assets/                # Static assets like images and icons
├── components/            # React components for each page and shared components
│   ├── Header.jsx         # Navigation bar
│   ├── Footer.jsx         # Footer section
│   ├── Home.jsx           # Home page
│   ├── Features.jsx       # Features page
│   ├── Pricing.jsx        # Pricing page
│   ├── AboutUs.jsx        # About Us page
│   └── MockChatbox.jsx    # Chatbox component
├── App.jsx                # Main application component with routes
├── index.css              # Global styles
├── main.jsx               # Entry point rendering the application
├── tailwind.config.js     # TailwindCSS configuration file
└── postcss.config.js      # PostCSS configuration for TailwindCSS

package.json               # Project dependencies and scripts

## Deploy on Vercel
 If using the Vercel CLI, run:
 Copy code
 vercel
 Follow the CLI prompts to deploy.
 If using the Vercel Dashboard:
 Push your project to GitHub.
 Connect your GitHub repository to Vercel via the Dashboard.
 Deploy the project directly from the Vercel Dashboard.
 # Accessing the Deployed Application
 - The application has been deployed on Vercel and is accessible via the following URL:
 # Deployed Application Link
   https://chatbot-landing-page-1tenai5dc-anil-jadavs-projects.vercel.app/chatbox


