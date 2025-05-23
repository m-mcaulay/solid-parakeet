import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
}

const Input = ({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: InputProps) => {
  return (
    <div className="relative">
      {icon && (
        <img
          src={icon}
          alt=""
          className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 px-4 py-2 rounded-radius-l border border-ink-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-required="true"
      />
    </div>
  );
};

export default Input;
