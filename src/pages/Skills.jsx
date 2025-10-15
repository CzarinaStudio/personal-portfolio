// src/pages/Skills.jsx - FINAL VERSION (No Bullet Points)

import React from 'react';
import { skillsData } from '../data'; 

const Skills = () => {
    const skills = skillsData || [];

    return (
        <section 
            id="skills-page" 
            className="main special active"
            style={{ paddingTop: 0 }} 
        >
            <div className="container">
                <header className="major">
                    <h2>My Skills & Expertise</h2>
                    <p>A breakdown of my technical proficiency and professional competencies.</p>
                </header>

                <div className="features">
                    {skills.length > 0 ? (
                        skills.map((skillGroup, index) => (
                            <article key={index}>
                                {/* Display FontAwesome icon */}
                                <span className={`icon solid major ${skillGroup.icon}`}></span>
                                
                                <h3>{skillGroup.category}</h3>
                                <p>{skillGroup.description}</p>
                                
                                {/* REMOVED: The <ul> and <li> tags.
                                    NEW: Displaying skills as a formatted paragraph, separated by a bullet (•) 
                                */}
                                <p style={{ 
                                    fontWeight: 600, 
                                    fontSize: '1em', 
                                    lineHeight: '1.6em' 
                                }}>
                                    {skillGroup.list.join(' • ')}
                                </p>
                            </article>
                        ))
                    ) : (
                        <p>No skills data loaded. Please check your `data.js` file.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;