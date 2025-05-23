import { ChangeEvent } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  legend: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  legend,
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) => {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-gray-700 mb-2">
        {legend}
      </legend>
      <div className="flex gap-6">
        {options.map((option) => {
          const inputId = `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={inputId}
              className="inline-flex items-center gap-2 cursor-pointer text-body-m text-ink"
            >
              <span className="relative flex items-center justify-center w-4 h-4">
                <input
                  type="radio"
                  id={inputId}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  className="sr-only peer"
                />
                <span className="block w-4 h-4 rounded-full border border-ink-muted bg-white peer-checked:border-[5px] peer-checked:border-primary" />
              </span>

              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
