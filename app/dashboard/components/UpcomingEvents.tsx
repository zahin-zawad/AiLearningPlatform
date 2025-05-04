import React from 'react';

function UpcomingEvents() {
  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Upcoming events</h2>
      <div className="flex items-center space-x-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm10.89 3.476L18.65 19.65a.5.5 0 01-.708.708l-1.414-1.415 3.707-3.707a.5.5 0 01.708 0l1.415 1.414-5.657-5.657a.5.5 0 01-.707 0z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="text-sm font-bold text-blue-500">Midterm 61_R is due</p>
          <p className="text-xs text-gray-500">Monday, 19 May, 12:00 AM</p>
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-sm"><a href="#" className="text-blue-500">Go to calendar...</a></p>
    </div>
  );
}

export default UpcomingEvents;