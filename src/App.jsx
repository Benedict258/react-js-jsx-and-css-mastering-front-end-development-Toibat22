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
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4">
            Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/components/TaskManager.jsx</code> and save to test HMR
          </p>

          <div className="w-full">
            <TaskManager />
          </div>
        </div>
      </div>
    </main>
  );
}

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
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
              <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <APIList />
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
