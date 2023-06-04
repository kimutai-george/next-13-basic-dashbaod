'use client'

import { useState } from 'react';
import { FiMenu, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Dash: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-width duration-300 ease-in-out`}>
        <div className="flex items-center justify-center h-16">
          <span className="text-xl">Logo</span>
        </div>

        {/* Sidebar Content */}
        <nav>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700">
                <span>
                  <FiMenu />
                </span>
                {sidebarOpen && <span>Dashboard</span>}
              </a>
            </li>
            {/* Add more sidebar items here */}
          </ul>
        </nav>

        <div className="absolute bottom-0 mb-8">
          <button
            className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-700 rounded-full"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-200">
        {/* Navbar */}
        <nav className="bg-white h-16 shadow">
          {/* Navbar Content */}
        </nav>

        {/* Page Content */}
        <div className="p-4">{children}</div>
      </main>
    </div>
  );
};

export default Dash;
