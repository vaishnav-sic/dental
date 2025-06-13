'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Install lucide-react or use any icon

const EcomSignup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
      <h2 className="text-3xl mb-6 text-center">JOIN US</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-xs"
          />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-xs"
          />
        </div>

        <div>
          <div>
          <label className="block text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black pr-10 text-xs"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          </div>
        </div>

          <div className="text-sm mt-6 text-gray-600">
        <p>Create an account and you will get:</p>
        <ul className="list-disc list-inside text-left mt-2 text-gray-700">
          <li>Sale promotions!</li>
          <li>Bonus offers!</li>
          <li>Update for all new product releases!</li>
        </ul>

        <p className="mt-4 text-xs">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
          <a href="#" className="text-blue-600 underline">
            privacy policy
          </a>.
        </p>
        
      </div>
      <button className="w-full bg-black text-white py-2 mt-4 hover:bg-gray-800 transition">
          SIGN UP
        </button>
        </div>

        
      </form>

      
    </div>
  );
};

export default EcomSignup;
