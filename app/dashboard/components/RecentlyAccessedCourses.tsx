import Link from 'next/link';
import React from 'react';

function RecentlyAccessedCourses() {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Recently accessed courses</h2>
      <div className="flex overflow-x-auto space-x-4">
        <div className="bg-white shadow-md p-4 rounded-lg w-64">
          <img src="https://via.placeholder.com/200x150" alt="Course" className="w-full h-40 object-cover" />
          <div className="mt-2">
            <p className="text-sm bg-gray-200 px-2 py-1 rounded">CSE Spring 2025</p>
            <p className="mt-2">Theory of Computation (Spring 2025)</p>
          </div>
          <Link href={"/coursepage2"}>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Course</button>
          </Link>
          
        </div>
        {/* Repeat for other courses */}
      </div>
    </div>
  );
}

export default RecentlyAccessedCourses;