import { ChangeEvent, useState } from "react";
import { Input, FormLabel, Button } from "../atoms";
import { RadioGroup, FormField } from "../molecules";
import { FormData } from "../../pages/Register";

interface RegistrationFormProps {
  handleSubmit: (data: FormData) => void;
}

const RegistrationForm = ({ handleSubmit }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    plan: "basic",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form aria-label="Registration Form">
      <div className="flex flex-col gap-4 px-6 pt-6 pb-[26px]">
        <h2 className="text-title-xl font-semibold text-ink font-sans">
          Register
        </h2>
        <FormField>
          <FormLabel label="Email" id="email" />
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            icon="/assets/icons/email.svg"
          />
        </FormField>

        <FormField>
          <FormLabel label="Password" id="password" />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            icon="/assets/icons/lock.svg"
          />
        </FormField>

        <RadioGroup
          legend="Plan"
          name="plan"
          options={[
            { value: "basic", label: "Basic" },
            { value: "pro", label: "Pro" },
            { value: "enterprise", label: "Enterprise" },
          ]}
          value={formData.plan}
          onChange={handleChange}
        />
      </div>
      <div className="w-full flex justify-end gap-4 py-4 px-6 border-t">
        <Button type="reset" variant="secondary">
          Cancel
        </Button>
        <Button type="submit" onClick={() => handleSubmit(formData)}>
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
