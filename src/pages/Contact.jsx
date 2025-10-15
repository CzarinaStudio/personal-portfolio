// src/pages/Contact.jsx - FINAL FIX FOR LARGE SPACE / TEXT ON TOP

import React from 'react';
import { contact } from '../data';

const Contact = () => {
    const email = contact?.email || "czarinafombuena@student.laverdad.edu.ph";
    const socialLinks = contact?.social || {};

    return (
        // *** THE FIX: The inline style 'paddingTop: 0' removes the large empty space ***
        <section 
            id="contact-page" 
            className="main special active" 
            style={{ paddingTop: 0 }} // <-- THIS PUTS THE CONTENT AT THE TOP!
        > 
            <div className="container">
                
                <header className="major">
                    <h2>Get In Touch</h2>
                    <p>I am currently available for new projects and opportunities. Send me an email!</p>
                </header>

                <div className="content">
                    
                    {/* Primary Call to Action: Email Button */}
                    <p>Click below to reach out directly to my email address:</p>
                    <ul className="actions special">
                        <li>
                            <a 
                                href={`mailto:${email}`}
                                className="medium" 
                            >
                                Send Email to: {email}
                            </a>
                        </li>
                    </ul>

                    {/* Secondary Contact Information: Social Media */}
                    <section style={{ marginTop: '3em' }}>
                        <h3>Connect with me</h3>
                        <ul className="icons">
                            {socialLinks.linkedin && (
                                <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                            )}
                            {socialLinks.github && (
                                <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                            )}
                        </ul>
                    </section>
                    
                    {/* Contact Form Placeholder */}
                    <section style={{ marginTop: '3em' }}>
                        <h3>Or, Send a Quick Message</h3>
                        <p>Please add your message here along with informations.</p>
                        <form method="post" action="#">
                            <div className="row gtr-uniform">
                                <div className="col-6 col-12-xsmall"><input type="text" name="name" placeholder="Name" disabled /></div>
                                <div className="col-6 col-12-xsmall"><input type="email" name="email" placeholder="Email" disabled /></div>
                                <div className="col-12"><textarea name="message" placeholder="Message" rows="4" disabled></textarea></div>
                                <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message (Disabled)" className="primary" disabled /></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                
            </div>
        </section>
    );
};

export default Contact;