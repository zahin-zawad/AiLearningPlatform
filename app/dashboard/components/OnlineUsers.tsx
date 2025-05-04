import React from 'react';

function OnlineUsers() {
  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Online users</h2>
      <div className="flex justify-between items-center">
        <p>28 online users (last 5 minutes)</p>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a3 3 0 00-3 3v6a3 3 0 01-6 0v-6a3 3 0 00-3-3 1 1 0 012-1h5a1 1 0 012 1zm-7 4a1 1 0 012 0v6a1 1 0 11-2 0V7z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a3 3 0 00-3 3v6a3 3 0 01-6 0v-6a3 3 0 00-3-3 1 1 0 012-1h5a1 1 0 012 1zm-7 4a1 1 0 012 0v6a1 1 0 11-2 0V7z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a3 3 0 00-3 3v6a3 3 0 01-6 0v-6a3 3 0 00-3-3 1 1 0 012-1h5a1 1 0 012 1zm-7 4a1 1 0 012 0v6a1 1 0 11-2 0V7z" />
          </svg>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center space-x-2">
          <img src="https://via.placeholder.com/30" alt="User" className="h-6 w-6 rounded-full" />
          <a href="#" className="text-blue-500">Zahin Zawad</a>
        </div>
        {/* Add more users */}
      </div>
    </div>
  );
}

export default OnlineUsers;