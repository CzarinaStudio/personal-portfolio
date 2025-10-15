// src/App.jsx

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // 1. Create state to manage the 'is-preload' class on the body.
  const [isPreload, setIsPreload] = useState(true);

  useEffect(() => {
    // 2. Set a timeout to remove the 'is-preload' class after a short delay (e.g., 100ms)
    // This allows the initial styles to render before the components fully mount,
    // which prevents visual glitches (like the header being hidden).
    const timer = setTimeout(() => {
      setIsPreload(false);
    }, 100);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  // 3. Apply the class to the body element dynamically
  useEffect(() => {
    document.body.className = isPreload ? 'is-preload' : '';
  }, [isPreload]);


  return (
    // The #wrapper ID is CRITICAL for the template's CSS structure.
    <div id="wrapper">
      
      {/* Header contains the main navigation */}
      <Header /> 

      {/* The Outlet renders the current Page (Bio, Projects, Skills, Contact) */}
      <Outlet />

      {/* Footer contains copyright and social links */}
      <Footer />
      
    </div>
  );
}

export default App;