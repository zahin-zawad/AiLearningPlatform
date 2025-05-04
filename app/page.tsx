import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="DIU Logo" className="h-16" />
            <select className="border rounded px-2 py-1 text-sm">
              <option>Categories</option>
            </select>
            <a href="#" className="text-blue-600 hover:underline">Home</a>
            <a href="#" className="text-gray-700 hover:underline">Guidelines</a>
          </div>
          <div className="flex space-x-4 items-center">
            <input type="text" placeholder="Search" className="border px-2 py-1 rounded text-sm" />
            <Link href={"/login"}><button className="text-sm text-blue-600 hover:underline cursor-pointer">Log in</button></Link>
            
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/loginPagebg.jpg')" }}>
        <h1 className="text-4xl font-bold mb-4">Welcome to DIU Blended Learning Center</h1>
        <p className="max-w-2xl mx-auto mb-6 text-gray-100">
          Blended Learning Center is the digital teaching and learning hub of Daffodil International University.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer">Courses</button>
          <Link href={"/login"}>
          <button className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer">Login</button>
          </Link>
          
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Guidelines and Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Guidelines for Students",
            "Guidelines for Teachers",
            "Content Guidelines for Teachers",
            "Need Further Help with BLC Platform?",
          ].map((title, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h3 className="font-medium mb-2 text-lg">{title}</h3>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded">{title.includes("Help") ? "Send Mail" : "View"}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Stats */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Students' Experience</h3>
            <p className="mb-4 text-gray-600">Learn about the BLC platform from a student of Daffodil International University.</p>
          </div>
          <iframe
            className="w-full h-64 rounded"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Student Experience"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["20+ Learning Activities", "400+ Total Plugins", "100+ Custom Integrations", "20+ Different Reports"].map((text, idx) => (
            <div key={idx} className="text-xl font-bold text-blue-600">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Available courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Computer Network - Repository", "Social and Professional Issues in Computing (Spring 2025)", "Law of transfer of Property (Spring 2025)"].map((course, idx) => (
              <div key={idx} className="border p-4 rounded shadow">
                <p className="text-sm mb-2">DIU</p>
                <h4 className="font-semibold text-base mb-1">{course}</h4>
                <p className="text-xs text-gray-500">Beginner</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-sm text-center py-4">
        <a href="#" className="text-blue-400 underline">Privacy Policy</a> | &copy; 2022 Daffodil International University. All Rights Reserved.
      </footer>
    </div>
  );
}
