import React from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const linkBase =
    "relative pb-1 hover:text-green-400 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] transition duration-200";

  const activeLink =
    "text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.8)] " +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] " +
    "after:bg-green-400 after:rounded-full after:shadow-[0_0_6px_rgba(34,197,94,0.8)] " +
    "after:transform after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  const inactiveLink =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] " +
    "after:bg-green-400 after:rounded-full after:transform after:scale-x-0 " +
    "after:origin-left after:transition-transform after:duration-300";

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-500">BudgetIQ</h1>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            Contact
          </NavLink>

          {/* Show only when user is signed out */}
          <SignedOut>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Sign In
            </NavLink>
          </SignedOut>

          {/* Show when user is signed in */}
          <SignedIn>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Dashboard
            </NavLink>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

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
