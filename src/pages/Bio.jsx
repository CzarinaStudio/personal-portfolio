// src/pages/Bio.jsx

import React from 'react';
import { bioData, contact } from '../data'; // Ensure this path is correct: src/data.js

const Bio = () => {
  // Use defensive programming in case bioData or contact are undefined/null
  const name = bioData?.name || "Czarina Fombuena";
  const summary = bioData?.summary || "Developer summary not loaded. Please check your data file.";
  const education = bioData?.education || [];
  const hobbies = bioData?.hobbies || [];
  const resumePDF = contact?.resumePDF || "#";

  return (
    // The template's main section for the Bio page is 'one'
    <section id="one" className="main special">
      <div className="container">
        
        {/* Profile Image - The template uses 'image fit primary' */}
        <span className="image fit primary">
            {/* CRITICAL IMAGE FIX: Use the /assets/images/ path */}
            <img src="public\assets\images\prof.jpg" alt={name || "Profile Picture"} /> 
        </span>
        
        <div className="content">
          <header className="major">
            <h2>Who I Am - I'm {name}</h2>
          </header>
          
          <p>{summary}</p>

          {/* Structured data sections - using template's 'features' grid */}
          <div className="features">
            <article>
                <h3>Education</h3>
                {/* Renders as paragraph text instead of <ul><li> */}
                {education.map((edu, index) => (
                    <p key={index} style={{ marginBottom: '0.5em' }}>
                        {edu.degree} from {edu.institution} ({edu.year})
                    </p>
                ))}
            </article>
            <article>
                <h3>Interests & Hobbies</h3>
                {/* Renders as a single paragraph with items separated by commas */}
                <p>
                    {hobbies.join(' • ')} 
                </p>
            </article>
          </div>

        </div>
        
        {/* Resume Button and new text */}
        <footer>
          {/* FIX: Text wrapped in <strong> for bolding */}
          <p><strong>You can download my resume here!</strong></p> 
          
          <ul className="actions special">
            <li>
              <a 
                href={resumePDF} 
                download 
                className="button major" // Template's primary button style
              >
                Download Full Resume (PDF)
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Bio;