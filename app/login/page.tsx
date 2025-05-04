import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side Background Image */}
      <div
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/loginPagebg.jpg')" }}
      >
      </div>

      {/* Right Side Login Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 py-12">
        <div className="max-w-sm w-full space-y-6">
          <div className="text-center">
            <img src="/logo.png" alt="BLC Logo" className="mx-auto h-32 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">
              Hi, Welcome to DIU Blended Learning Center
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Enter your details to log in your account
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>

            <Link href={"/dashboard"}>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
            >
              Log in
            </button>
            </Link>
          </form>

          <div className="text-sm text-gray-700">
            <p className="mt-4">
              <strong>First time using this site</strong>
              <br />
              For full access to this site, you first need to create an account.
            </p>
            <button className="mt-2 w-full border border-blue-600 text-blue-600 py-2 rounded font-semibold hover:bg-blue-50">
              Create new account
            </button>

            <p className="mt-4">
              Some courses may allow guest access
            </p>
            <button className="mt-2 w-full border border-blue-600 text-blue-600 py-2 rounded font-semibold hover:bg-blue-50">
              Access as a guest
            </button>
          </div>

          <div className="text-center text-xs text-blue-600 mt-6">
            <a href="#" className="hover:underline">Cookies notice</a>
          </div>
        </div>
      </div>
    </div>
  );
}
