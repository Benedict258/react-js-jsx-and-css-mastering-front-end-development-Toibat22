import React from 'react';
import { Link } from 'react-router-dom';
import { usetheme } from '../context/ThemeContext.jsx';
import Button from './Button.jsx';

const Navbar = () => {
    const { theme, toggleTheme } = usetheme();
    return (
        <nav className="navbar">
            <div className='Nav-buttons'>
                <Link to="/" className="nav-logo">MyApp</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
                <Link to="/api" className="nav-item">API</Link>
            </div>
            <div className='theme-toggle'>
                <Button onClick={toggleTheme} variant='primary'>
                    {theme === 'dark' ? 'light' : 'Dark'} Mode
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;