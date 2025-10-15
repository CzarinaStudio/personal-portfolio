// src/pages/Projects.jsx - FINAL VERSION WITH THEME-FRIENDLY BUTTON CTA

import React from 'react';
import { Link } from 'react-router-dom'; 
import { projectsData } from '../data'; 

const Projects = () => {
    const projects = projectsData || [];

    return (
        <section 
            id="projects-page" 
            className="main special active"
            style={{ paddingTop: 0 }} 
        >
            <div className="container">
                <header className="major">
                    <h2>My Projects</h2>
                    <p>A showcase of my recent work in development and design, including tools like Canva and Figma.</p>
                </header>

                {/* Main Projects Grid */}
                <div className="features">
                    {projects.length > 0 ? (
                        projects.map((project, index) => (
                            <article key={index}>
                                {/* Project Image */}
                                {project.image && (
                                    <span className="image fit">
                                        <img src={project.image} alt={project.title} />
                                    </span>
                                )}
                                
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                
                                {/* Tags/Technologies Used */}
                                {project.tags && project.tags.length > 0 && (
                                    <p style={{ 
                                        marginTop: '0.5em', 
                                        fontStyle: 'italic', 
                                        fontSize: '0.9em', 
                                        fontWeight: 600
                                    }}>
                                        Tech Stack: {project.tags.join(' • ')}
                                    </p>
                                )}

                                {/* Links/Actions */}
                                <ul className="actions special">
                                    {project.liveLink && (
                                        <li>
                                            <a 
                                                href={project.liveLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="button"
                                            >
                                                View Live
                                            </a>
                                        </li>
                                    )}
                                    {project.repoLink && (
                                        <li>
                                            <a 
                                                href={project.repoLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="button small"
                                            >
                                                View Code (GitHub)
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </article>
                        ))
                    ) : (
                        <p>No projects currently loaded. Please ensure your `data.js` file is correctly updated.</p>
                    )}
                </div>

                {/* --- NEW, SPACED, AND THEMATIC BUTTON CTA --- */}
                <section style={{ marginTop: '5em', textAlign: 'center' }}>
                    
                    {/* The text paragraph */}
                    <p style={{ fontSize: '1.25em', marginBottom: '1.5em' }}>
                        IF YOU WISH TO SEE MY SKILLS, PLEASE
                    </p>
                    
                    {/* The button, using the template's primary style and actions for spacing */}
                    <ul className="actions special">
                        <li>
                            <Link to="/skills" className="button primary large">
                                CLICK HERE!
                            </Link>
                        </li>
                    </ul>
                </section>
                {/* -------------------------------------- */}

            </div>
        </section>
    );
};

export default Projects;