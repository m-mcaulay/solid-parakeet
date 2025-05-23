import { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
}

const FormField = ({ children }: FormFieldProps) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export default FormField;
