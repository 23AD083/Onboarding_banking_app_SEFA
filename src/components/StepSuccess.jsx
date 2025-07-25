import React from "react";
import { useNavigate } from "react-router-dom";

export default function StepSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center animate-fadeIn">
      <div className="text-6xl mb-4 animate-bounce">🎉</div>
      <h2 className="text-3xl font-extrabold mb-2 text-indigo-700 drop-shadow">You're All Set!</h2>
      <p className="text-gray-600 mb-8 text-center max-w-xs">Your onboarding is complete. Welcome to <span className='font-semibold text-indigo-500'>SEFA Digital Bank</span>!</p>
      <button
        className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white px-8 py-3 rounded-full shadow-xl hover:scale-105 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-200"
        onClick={() => navigate('/dashboard')}
      >
        Go to Dashboard
      </button>
    </div>
  );
} 