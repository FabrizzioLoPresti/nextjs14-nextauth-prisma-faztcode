'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import ErrorFormComponent from './error-form-component';

type Props = {};

interface LoginForm {
  email: string;
  password: string;
}

const LoginUserForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: searchParams.get('callbackUrl') ?? '/',
    });

    if (res?.ok !== undefined && !res?.ok) {
      setError(res?.error ?? 'An error occurred');
      return;
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-slate-600 px-4 py-6 flex flex-col gap-y-4"
    >
      <div className="flex flex-col gap-y-2 [&>input]:text-black">
        <label htmlFor="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          placeholder="user@email.com"
          {...register('email', {
            required: {
              value: true,
              message: 'E-Mail is required',
            },
          })}
        />
        {errors.email && (
          <ErrorFormComponent message={errors.email.message ?? ''} />
        )}
      </div>

      <div className="flex flex-col gap-y-2 [&>input]:text-black">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
          })}
        />
        {errors.password && (
          <ErrorFormComponent message={errors.password.message ?? ''} />
        )}
      </div>

      {error && <ErrorFormComponent message={error} />}

      <button type="submit" className="bg-slate-800 rounded-md py-2">
        Login
      </button>
    </form>
  );
};

export default LoginUserForm;
