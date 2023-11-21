import RegisterUserForm from '@/components/register-user-form';

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl h-screen flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-3xl font-bold text-center">Register Page</h1>
      <RegisterUserForm />
    </section>
  );
}
