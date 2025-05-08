import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  UserCheck,
  LayoutDashboard,
  ChartPie,
  Settings,
  House,
  Menu,
  X
} from 'lucide-react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <House /> },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard /> },
    { name: 'Users', path: '/users', icon: <UserCheck /> },
    { name: 'Analytics', path: '/analytics', icon: <ChartPie /> },
    { name: 'Settings', path: '/settings', icon: <Settings /> },
  ];

  return (
    <>
      {/* Toggle button (visible only on mobile) */}
      <button
        className="md:hidden p-2 m-2 text-white bg-gray-800 z-50 fixed top-0 left-0"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 w-64 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static z-50`}
      >
        <h2 className="text-xl font-bold p-4 border-b border-gray-700">AI Dashboard</h2>

        <ul className="space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <div
                    className={`flex items-center space-x-3.5 p-2 rounded cursor-pointer
                    ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-500 text-white'}`}
                  >
                    {item.icon}
                    <h1>{item.name}</h1>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
