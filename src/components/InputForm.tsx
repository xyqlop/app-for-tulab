import { useFormContext } from "react-hook-form";

interface InputFormProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, type, placeholder }) => {
  const { register } = useFormContext();

  return (
    <div className="input-container">
      <label className="font-semibold lg:text-lg" htmlFor={label}>
        {label} :
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(label)}
        className="input-box"
        id={label}
        autoComplete="off"
      />
    </div>
  );
};

export default InputForm;
