import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnboardingStepper from "./components/OnboardingStepper";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingStepper />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
