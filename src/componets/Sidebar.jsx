import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  let linkStyle = ({ isActive }) => {
    return isActive ? 'text-white bg-blue-600 p-2 rounded' : 'text-white hover:bg-blue-500 p-2 rounded';
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <h2>AI Dashboard</h2>
      <ul className="space-y-4 p-4">
        <li>
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={linkStyle}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={linkStyle}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className={linkStyle}>
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={linkStyle}>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
