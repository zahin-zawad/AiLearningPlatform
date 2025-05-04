import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Header() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <div className="dropdown">
          <select className="border rounded px-2 py-1 text-sm">
              <option>Categories</option>
            </select>
        </div>
        <a href="/" className="px-4 py-2 text-gray-600">Home</a>
        <a href="#" className="px-4 py-2 text-blue-500 border-b-2 border-blue-500">Dashboard</a>
        <a href="#" className="px-4 py-2 text-gray-600">My Courses</a>
        <div className="dropdown">
          <button className="dropdown-toggle px-4 py-2 text-gray-600">Guidelines</button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <button className="dropdown-toggle px-4 py-2 text-gray-600">Recent</button>
        </div>
        <div className="relative">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-full w-64 bg-gray-200" />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <button className="px-4 py-2 text-gray-600">
        bell icon   
        </button>
        <button className="px-4 py-2 text-gray-600">
          text icon
        </button>
        <div className="relative">
          <button className="px-4 py-2 text-gray-600">
            <img src="https://avatars.githubusercontent.com/u/25245044?v=4" alt="User" className="rounded-full h-8 w-8" />
          </button>
        </div>
      </div>
      
    </nav>
  );
}

export default Header;