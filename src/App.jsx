import React from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
  {
    path: "/analytics",
    element: (
      <DashboardLayout>
        <Analytics />
      </DashboardLayout>
    ),
  },
  {
    path: "/users",
    element: (
      <DashboardLayout>
        <Users />
      </DashboardLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <DashboardLayout>
        <Settings />
      </DashboardLayout>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


function App() {
  

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
