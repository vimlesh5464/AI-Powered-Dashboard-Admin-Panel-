import React, { useState } from 'react';
import { Bell, User, Sun, Moon } from 'lucide-react';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`p-4 shadow flex justify-between items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      
      {/* Left: Title */}
      <h1 className="text-xl font-semibold">Admin Panel</h1>

      {/* Center: Search */}
      <form className="w-1/2 hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className={`w-full py-2 px-3 border rounded focus:outline-none ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'}`}
        />
      </form>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 relative">
        {/* Toggle */}
        <button onClick={toggleDarkMode}>
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon />}
        </button>

        <Bell className="cursor-pointer" />

        {/* Profile Icon */}
        <div className="relative">
          <button onClick={toggleDropdown}>
            <User className="cursor-pointer" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className={`absolute right-0 top-10 w-40 rounded shadow-lg z-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">My Profile</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
