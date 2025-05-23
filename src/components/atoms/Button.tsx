import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const Button = ({
  type = "button",
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  // Note: in Figma top and bottom has 13px but have set it to 12px - py-3, would query
  const base =
    "px-5 py-3 rounded-pill font-semibold text-title-m focus:outline-none focus:ring-2";
  const variants: Record<ButtonVariant, string> = {
    primary: `${base} bg-blue-500 text-white hover:bg-blue-600 focus:ring-primary`,
    secondary: `${base} bg-transparent text-ink hover:bg-gray-200 focus:ring-gray-300`,
  };
  return (
    <button type={type} className={variants[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;
