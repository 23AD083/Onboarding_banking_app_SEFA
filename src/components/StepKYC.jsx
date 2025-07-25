import React, { useState } from "react";
import Tooltip from "./Tooltip";

export default function StepKYC({ nextStep, prevStep }) {
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!/^([A-Z]{5}[0-9]{4}[A-Z]{1})$/.test(pan)) {
      setError("Invalid PAN format");
      return;
    }
    if (!/^\d{12}$/.test(aadhaar)) {
      setError("Aadhaar must be 12 digits");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="flex flex-col items-center animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4">KYC Details</h2>
      <div className="w-full mb-4">
        <label className="block text-left mb-1 font-medium">PAN Number</label>
        <Tooltip text="Enter your 10-character PAN (ABCDE1234F)">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={pan}
            onChange={e => setPan(e.target.value.toUpperCase())}
            placeholder="ABCDE1234F"
            maxLength={10}
          />
        </Tooltip>
      </div>
      <div className="w-full mb-4">
        <label className="block text-left mb-1 font-medium">Aadhaar Number</label>
        <Tooltip text="Enter your 12-digit Aadhaar number">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={aadhaar}
            onChange={e => setAadhaar(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="123412341234"
            maxLength={12}
          />
        </Tooltip>
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="flex w-full justify-between mt-4">
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={prevStep}>Back</button>
        <button className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
} 