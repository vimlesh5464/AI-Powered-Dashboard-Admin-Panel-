import React from 'react'
import Sidebar from '../componets/Sidebar'
import Topbar from '../componets/Topbar'


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout
