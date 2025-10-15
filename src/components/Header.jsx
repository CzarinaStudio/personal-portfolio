// src/components/Header.jsx - FINAL VERSION (About Me & View Projects ONLY)

import React from 'react';
// Using NavLink for reliable routing and active state
import { NavLink } from 'react-router-dom'; 
import { bioData } from '../data'; 

const Header = () => {
    // Safely access data
    const name = bioData?.name || "Czarina Fombuena";
    const roles = bioData?.roles || "Developer, Designer";

    return (
        <section id="header">
            <header className="major">
                <h1>{name}</h1> 
                <p>{roles}</p> 
            </header>
            
            {/* Navigation Buttons using NavLink */}
            <div className="container">
                <ul className="actions special">
                    
                    {/* 1. About Me (Home) */}
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'button primary scrolly' : 'button scrolly'}
                            end
                        >
                            About Me
                        </NavLink>
                    </li>
                    
                    {/* 2. Projects */}
                    <li>
                        <NavLink 
                            to="/projects" 
                            className={({ isActive }) => isActive ? 'button primary scrolly' : 'button scrolly'}
                        >
                            View Projects
                        </NavLink>
                    </li>
                    
                    {/* The Contact and Skills buttons are intentionally omitted from the header */}

                </ul>
            </div>
        </section>
    );
};

export default Header;