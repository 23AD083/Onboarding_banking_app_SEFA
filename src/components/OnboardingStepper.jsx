import React, { useState } from "react";
import StepWelcome from "./StepWelcome";
import StepKYC from "./StepKYC";
import StepUpload from "./StepUpload";
import StepReview from "./StepReview";
import StepSuccess from "./StepSuccess";
import ProgressBar from "./ProgressBar";

const steps = [
  { label: "Welcome", component: StepWelcome },
  { label: "KYC Details", component: StepKYC },
  { label: "Upload Docs", component: StepUpload },
  { label: "Review", component: StepReview },
  { label: "Success", component: StepSuccess },
];

export default function OnboardingStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-2xl transition-all duration-500">
        <ProgressBar steps={steps} currentStep={currentStep} />
        <div className="mt-8">
          <StepComponent nextStep={nextStep} prevStep={prevStep} />
        </div>
      </div>
    </div>
  );
} 