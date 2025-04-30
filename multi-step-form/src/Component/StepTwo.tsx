// src/components/StepTwo.tsx
import { useFormContext } from "react-hook-form";
import InputField from "./InputField";

const StepTwo: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 2: Contact Information</h2>
      <InputField
        label="Email"
        name="email"
        type="email"
        register={register}
        required="Email is required"
        error={errors.email?.message}
      />
      <InputField
        label="Phone"
        name="phone"
        type="tel"
        register={register}
        required="Phone number is required"
        error={errors.phone?.message}
      />
    </div>
  );
};

export default StepTwo;
