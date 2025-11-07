import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const SignIn = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h2 className="text-3xl font-semibold mb-4">Sign In</h2>
    <p className="text-gray-500">Sign in functionality coming soon...</p>
  </div>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode
            ? "bg-gray-950 text-gray-100"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="flex items-center justify-center h-[calc(100vh-64px)] px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
