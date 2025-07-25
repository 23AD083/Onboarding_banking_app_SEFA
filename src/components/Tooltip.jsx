import React, { useState } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded shadow-lg z-10 animate-fadeIn">
          {text}
        </span>
      )}
    </span>
  );
} 