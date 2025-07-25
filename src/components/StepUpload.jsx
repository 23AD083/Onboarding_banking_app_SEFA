import React, { useState } from "react";

const fileTypes = [
  { label: "PAN Card", name: "pan" },
  { label: "Aadhaar Card", name: "aadhaar" },
  { label: "Selfie", name: "selfie" },
];

export default function StepUpload({ nextStep, prevStep }) {
  const [files, setFiles] = useState({});
  const [previews, setPreviews] = useState({});

  const handleFile = (e, name) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(f => ({ ...f, [name]: file }));
      const reader = new FileReader();
      reader.onload = ev => setPreviews(p => ({ ...p, [name]: ev.target.result }));
      reader.readAsDataURL(file);
    }
  };

  const allUploaded = fileTypes.every(ft => files[ft.name]);

  return (
    <div className="flex flex-col items-center animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
      <div className="w-full space-y-4 mb-4">
        {fileTypes.map(ft => (
          <div key={ft.name} className="flex flex-col items-start">
            <label className="mb-1 font-medium">{ft.label}</label>
            <input
              type="file"
              accept={ft.name === "selfie" ? "image/*" : ".pdf,.jpg,.jpeg,.png"}
              className="mb-2"
              onChange={e => handleFile(e, ft.name)}
            />
            {previews[ft.name] && (
              <img
                src={previews[ft.name]}
                alt={ft.label}
                className="w-24 h-16 object-cover rounded shadow border mb-2 animate-fadeIn"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between mt-4">
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={prevStep}>Back</button>
        <button
          className={`px-4 py-2 rounded text-white transition ${allUploaded ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-400 cursor-not-allowed"}`}
          onClick={nextStep}
          disabled={!allUploaded}
        >
          Next
        </button>
      </div>
    </div>
  );
} 