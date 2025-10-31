import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'light';
        } catch {
            return 'light';
        }
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try {
            localStorage.setItem('theme', theme);
        } catch {}
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeProvider = ThemeContextProvider;

export default ThemeContextProvider;
export { ThemeProvider };

export const usetheme = () => {
    const ctx = useContext(ThemeContext);
    if (ctx === undefined) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return ctx;
};