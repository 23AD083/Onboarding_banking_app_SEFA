import React from "react";

export default function AzureADLogin({ onLogin }) {
  return (
    <button
      className="w-full flex items-center justify-center bg-blue-700 text-white py-2 rounded-lg shadow hover:bg-blue-800 transition mb-4"
      onClick={onLogin}
    >
      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
      Sign in with Azure AD
    </button>
  );
} 