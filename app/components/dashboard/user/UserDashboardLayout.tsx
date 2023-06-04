'use client'


import { useState } from 'react';
import Sidebar from './UserSidebar';
import Navbar from '../../navbar/Navbar';
import UserSidebar from './UserSidebar';

interface UserDashboardLayoutProps {
    children: React.ReactNode;
  }

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <main className="flex-grow bg-gray-200">
        {/* Navbar */}
        <Navbar  toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className="p-4 page-wrap">{children}</div>
      </main>
    </div>
  );
};

export default UserDashboardLayout;
