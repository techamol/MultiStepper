// src/components/StepOne.tsx
import { useFormContext } from "react-hook-form";
import InputField from "./InputField";

const StepOne: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 1: Personal Information</h2>
      <InputField
        label="First Name"
        name="firstName"
        register={register}
        required="First name is required"
        error={errors.firstName?.message}
      />
      <InputField
        label="Last Name"
        name="lastName"
        register={register}
        required="Last name is required"
        error={errors.lastName?.message}
      />
    </div>
  );
};

export default StepOne;
