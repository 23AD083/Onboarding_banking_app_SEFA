import React from "react";

export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, idx) => (
        <div key={step.label} className="flex-1 flex flex-col items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300
              ${idx <= currentStep ? "bg-indigo-500 border-indigo-500 text-white" : "bg-white border-gray-300 text-gray-400"}
            `}
          >
            {idx + 1}
          </div>
          <span className={`mt-2 text-xs font-medium ${idx <= currentStep ? "text-indigo-600" : "text-gray-400"}`}>
            {step.label}
          </span>
          {idx < steps.length - 1 && (
            <div className="w-full h-1 bg-gray-200 mt-2 mb-2 rounded">
              <div
                className={`h-1 rounded transition-all duration-300 ${idx < currentStep ? "bg-indigo-500" : ""}`}
                style={{ width: "100%" }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 