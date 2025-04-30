// src/components/MultiStepForm/MultiStepForm.tsx
import { useForm, FormProvider } from "react-hook-form";
import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import axios from "axios";
import { useFormSteps } from "../../hooks/useFormSteps";

const MultiStepForm: React.FC = () => {
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } =
    useFormSteps(3);
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      favoriteColor: "",
    },
  });

  const onSubmit = async (data: any) => {
    if (isLastStep) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          data
        );
        console.log("Form submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form");
      }
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {renderStep()}
        <div className="flex justify-between">
          {!isFirstStep && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
