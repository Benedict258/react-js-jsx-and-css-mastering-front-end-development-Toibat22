// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import APIList from './components/APIList';

function Home() {
  return (
    <main className="page-center">
      <div className="panel" style={{ width: 'min(980px, 100%)' }}>
        <TaskManager />
      </div>
    </main>
  );
}

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'transparent', color: 'inherit' }}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={
              <main className="page-center">
                <div className="panel" style={{ width: 'min(980px, 100%)' }}>
                  <APIList />
                </div>
              </main>
            } />
            {/* add more routes/pages here */}
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
