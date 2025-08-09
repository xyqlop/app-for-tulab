import { useFormContext } from "react-hook-form";

type Options = Array<string>;

interface SelectInputProps {
  options: Options;
  label: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, label }) => {
  const { register } = useFormContext();

  return (
    <div className="input-container">
      <label className="font-semibold lg:text-lg" htmlFor={label}>
        {label} :
      </label>
      <select {...register(label)} id={label} className="input-box capitalize ">
        <option value="" className="text-neutral-400/30">
          Pilih satu...
        </option>
        {options.map((optionItem) => (
          <option key={optionItem} value={optionItem}>
            {optionItem}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
