import React from 'react';
import { Bell, User } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex gap-4 items-center">
        <Bell className="text-gray-600" />
        <User className="text-gray-600" />
      </div>
    </div>
  );
};

export default Topbar;
