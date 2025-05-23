interface FormLabelProps {
  label: string;
  id: string;
}

const FormLabel = ({ label, id }: FormLabelProps) => {
  return (
    <label
      htmlFor={id}
      className="block text-body-m font-normal text-ink tracking-tightest"
    >
      {label}
    </label>
  );
};

export default FormLabel;
