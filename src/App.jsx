import React from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Home from './pages/Home';  // Add this import for Home
import NotFound from './pages/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Home />  {/* You can create a Home page component for this */}
      </DashboardLayout>
    ),
  },
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
    element: <NotFound />,  // Fallback for unknown routes
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
