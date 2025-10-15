// src/components/Footer.jsx

import React from 'react';
import { contact } from '../data'; 

const Footer = () => {
    const socialLinks = contact?.social || {};
    const currentYear = new Date().getFullYear(); // Optional: Keeps the copyright year current
    
    return (
        <section id="footer">
            <div className="container">
                {/* Social Icons */}
                <ul className="icons">
                    {socialLinks.linkedin && (
                        <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    )}
                    {socialLinks.github && (
                        <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                    )}
                    {contact?.email && (
                        <li>
                            {/* Correct template literal syntax for mailto */}
                            <a href={`mailto:${contact.email}`} className="icon solid alt fa-envelope"><span className="label">Email</span></a>
                        </li>
                    )}
                </ul>
                
                {/* *** MODIFIED COPYRIGHT LINE *** */}
                <p className="copyright">
                    &copy; Czarina Fombuena Portfolio. All rights reserved. &bull; 
                    {/* Changed "Design: HTML5 UP" to "Contact: Contact Me!" and linked to /contact */}
                    Contact: <a href="/contact">Contact Me!</a>
                </p>
            </div>
        </section>
    );
};

export default Footer;