import React from "react";

export default function StepReview({ nextStep, prevStep }) {
  // In a real app, you'd pull this from context or props
  const dummyData = {
    pan: "ABCDE1234F",
    aadhaar: "123412341234",
    panFile: "Uploaded",
    aadhaarFile: "Uploaded",
    selfie: "Uploaded",
  };

  return (
    <div className="flex flex-col items-center animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4">Review Your Details</h2>
      <div className="w-full bg-gray-50 rounded-lg p-4 shadow mb-4">
        <div className="mb-2"><span className="font-medium">PAN:</span> {dummyData.pan}</div>
        <div className="mb-2"><span className="font-medium">Aadhaar:</span> {dummyData.aadhaar}</div>
        <div className="mb-2"><span className="font-medium">PAN Card:</span> {dummyData.panFile}</div>
        <div className="mb-2"><span className="font-medium">Aadhaar Card:</span> {dummyData.aadhaarFile}</div>
        <div className="mb-2"><span className="font-medium">Selfie:</span> {dummyData.selfie}</div>
      </div>
      <div className="flex w-full justify-between mt-4">
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={prevStep}>Back</button>
        <button className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600" onClick={nextStep}>Confirm & Submit</button>
      </div>
    </div>
  );
} 