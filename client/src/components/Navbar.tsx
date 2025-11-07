import React from "react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-500">BudgetIQ</h1>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition"
          >
            Contact
          </a>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-1 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
