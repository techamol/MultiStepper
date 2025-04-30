// src/components/StepThree.tsx
import { useFormContext } from "react-hook-form";
import InputField from "./InputField";

const StepThree: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Step 3: Preferences</h2>
      <InputField
        label="Favorite Color"
        name="favoriteColor"
        register={register}
        required="Favorite color is required"
        error={errors.favoriteColor?.message}
      />
    </div>
  );
};

export default StepThree;
