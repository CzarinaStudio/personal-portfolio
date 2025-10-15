// src/main.jsx - FINAL, COMPLETE VERSION WITH ALL ROUTES

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

// Import main components
import App from './App.jsx';

// Import ALL Page Components
import Bio from './pages/Bio.jsx'; 
import Contact from './pages/Contact.jsx'; 
import Projects from './pages/Projects.jsx'; 
import Skills from './pages/Skills.jsx'; // <--- THIS IS THE MISSING IMPORT!

// Define the Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        errorElement: <div>Oops! Page not found or crashed.</div>, 
        children: [
            {
                index: true, 
                element: <Bio />, // Bio page is the default home page
            },
            {
                path: 'projects',
                element: <Projects />, // Projects page route
            },
            {
                path: 'contact',
                element: <Contact />, // Contact page route
            },
            {
                path: 'skills',
                element: <Skills />, // Skills page route is now defined
            },
        ],
    },
]);

// Render the Application
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} /> 
    </React.StrictMode>,
);