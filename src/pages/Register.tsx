import { Card, RegistrationForm } from "../components/organisms";

export interface FormData {
  email: string;
  password: string;
  plan: string;
}

const Register = () => {
  const handleSubmit = (data: FormData) => {
    console.log("Submitted:", data);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAF6F0] p-4">
      <Card
        imageSrc="/assets/images/Media.png"
        imageAlt="People working in office cubicles"
      >
        <RegistrationForm handleSubmit={handleSubmit} />
      </Card>
    </main>
  );
};

export default Register;
