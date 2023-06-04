'use client'


import { FiMenu, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiMenuAltLeft } from 'react-icons/bi'
import UserMenu from './UserMenu';

type NavbarProps = {
  toggleSidebar?: () => void;
};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-100 h-16 shadow flex items-center justify-between shadow-none">
      {/* Toggle Button */}
      <div className="md flex items-center">
        <button
          className="p-4 rounded-md bg-white-800 hover:bg-white-200"
        >
          {/* {sidebarOpen ? <GiHamburgerMenu /> : <BiMenuAltLeft />} */}
        </button>
        <h1 className=" ml-2 text-2xl font-bold bg-gradient-to-r from-green-400 via-red-600 to-purple-400 text-transparent bg-clip-text">
          The Name
          </h1>

      </div>
      <div className="hidden md:flex items-center mr-4">
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
