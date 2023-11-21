import LoginUserForm from '@/components/login-user-form';

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl h-screen flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-3xl font-bold text-center">Login Page</h1>
      <LoginUserForm />
    </section>
  );
}
