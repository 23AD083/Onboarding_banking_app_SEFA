import React from "react";
import Tooltip from "./Tooltip";

export default function StepWelcome({ nextStep }) {
  return (
    <div className="flex flex-col items-center text-center animate-fadeIn">
      <h2 className="text-2xl font-bold mb-2">Welcome to SEFA Digital Bank!</h2>
      <p className="text-gray-600 mb-6">Let’s get you set up in a few easy steps.</p>
      <Tooltip text="Your info is safe with us!">
        <button
          className="bg-indigo-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-600 transition"
          onClick={nextStep}
        >
          Get Started
        </button>
      </Tooltip>
    </div>
  );
} 