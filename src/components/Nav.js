import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul>
                <NavLink 
                    to="/" 
                    className='scondary'
                >
                    <li>Home</li>
                </NavLink>
                
            </ul>
            <ul>
                <NavLink 
                    to="/login" 
                    className='scondary'
                >
                    <li>Se connecter</li>
                </NavLink>
                
            </ul>
        </nav>
    );
}

export default Navigation;