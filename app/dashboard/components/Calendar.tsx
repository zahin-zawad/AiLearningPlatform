import React from 'react';

function Calendar() {
  return (
    <div className="mt-4 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Calendar</h2>
      <div className="flex justify-between items-center mb-4">
        <select className="border rounded px-2 py-1">
          <option value="allcourses">All courses</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">New event</button>
      </div>
      <div className="flex justify-between mb-2">
        <button className="text-gray-500">Previous</button>
        <p>May 2025</p>
        <button className="text-gray-500">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div>Sat</div>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        {/* Add calendar days */}
      </div>
      <div className="flex justify-end mt-2">
        <button className="bg-white border rounded px-2 py-1 mr-2">Full calendar</button>
        <button className="bg-white border rounded px-2 py-1">Import or export calendars</button>
      </div>
    </div>
  );
}

export default Calendar;