// src/pages/Bio.jsx
import { bioData, contact } from '../data'; // Assuming your data file is at '../data'
import React from 'react'; // React import is necessary for JSX

const Bio = () => {
  return (
    // The main tag here is for the template's styling logic
    // The HTML5 UP 'Highlights' template uses section ID 'one' for the main bio section
    <section id="one" className="main special">
      <div className="container">

        {/* Image section using template classes */}
        <span className="image fit primary">
            {/* Ensure you put your image (e.g., pic01.jpg) in public/assets/images/ */}
            <img src="/assets/images/pic01.jpg" alt={bioData.name} />
        </span>

        <div className="content">
          <header className="major">
            <h2>Who I Am (Hi, I'm {bioData.name})</h2>
          </header>
          {/* Biography Summary from your data */}
          <p>
            {bioData.summary} 
          </p>

          {/* Education & Interests - Structured as simple lists */}
          <div className="features">
            <article>
                <h3>Education</h3>
                <ul>
                  {bioData.education.map((edu, index) => (
                      <li key={index}>**{edu.degree}** from {edu.institution} ({edu.year})</li>
                  ))}
                </ul>
            </article>
            <article>
                <h3>Interests & Hobbies</h3>
                <ul>
                  {bioData.hobbies.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                  ))}
                </ul>
            </article>
          </div>

        </div>

        {/* Resume Download Button using template's button styling */}
        <footer>
          <ul className="actions special">
            <li>
              <a 
                href={contact.resumePDF} 
                download 
                className="button major" // 'major' gives it the primary button style
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