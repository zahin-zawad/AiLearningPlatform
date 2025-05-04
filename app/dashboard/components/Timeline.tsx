import React from 'react';

function Timeline() {
  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Timeline</h2>
      <div className="flex space-x-4 mb-4">
        <select className="border rounded px-2 py-1">
          <option value="next7days">Next 7 days</option>
        </select>
        <select className="border rounded px-2 py-1">
          <option value="sortbydates">Sort by dates</option>
        </select>
        <div className="flex-grow relative">
          <input type="text" placeholder="Search by activity type or name" className="border rounded px-2 py-1 w-full" />
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 left-0 ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 7.586 7.707 6.293a1 1 0 00-1.414 1.414l1.586 1.586-1.586 1.586a1 1 0 101.414 1.414L9 9.414l1.707 1.707a1 1 0 001.414-1.414zM10 15a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <p>No upcoming activities due</p>
      </div>
    </div>
  );
}

export default Timeline;