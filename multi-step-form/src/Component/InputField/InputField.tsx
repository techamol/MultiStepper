import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { InputFieldProps } from "./InputField.types";
import styles from "./InputField.module.css";
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  required,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...register(name, { required })}
      />
    </div>
  );
};
export default InputField;
