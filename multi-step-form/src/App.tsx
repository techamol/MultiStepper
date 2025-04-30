import React from "react";
import MultiStepForm from "./Component/MultiStepForm/MultiStepForm";

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-8 flex justify-center items-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Multi-Step Form</h1>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default App;
