'use client';

import { useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { createUser, type User } from '@/actions/actions';
import ErrorFormComponent from './error-form-component';

type Props = {};

const RegisterUserForm = (props: Props) => {
  const [isPending, startTransition] = useTransition();
  const { pending } = useFormStatus();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.confirmPassword) {
      return alert('Passwords do not match');
    }

    startTransition(async () => {
      const res = await createUser(data);

      if (res.error) {
        return alert(res.error);
      }

      console.log(res);
      reset();
      push('/auth/login');
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-slate-600 px-4 py-6 flex flex-col gap-y-4"
    >
      <div className="flex flex-col gap-y-2 [&>input]:text-black">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="yourUsername123"
          className="p-2"
          {...register('username', {
            required: {
              value: true,
              message: 'Username is required',
            },
          })}
        />
        {errors.username && (
          <ErrorFormComponent message={errors.username.message ?? ''} />
        )}
      </div>

      <div className="flex flex-col gap-y-2 [&>input]:text-black">
        <label htmlFor="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          placeholder="user@email.com"
          className="p-2"
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
          className="p-2"
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required',
            },
            maxLength: {
              value: 20,
              message: 'Password must be less than 20 characters',
            },
          })}
        />
        {errors.password && (
          <ErrorFormComponent message={errors.password.message ?? ''} />
        )}
      </div>

      <div className="flex flex-col gap-y-2 [&>input]:text-black">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="********"
          className="p-2"
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Confirm Password is required',
            },
            maxLength: {
              value: 20,
              message: 'Confirm Password must be less than 20 characters',
            },
          })}
        />
        {errors.confirmPassword && (
          <ErrorFormComponent message={errors.confirmPassword.message ?? ''} />
        )}
      </div>

      <button
        type="submit"
        className={`bg-slate-800 rounded-md py-2 ${
          isPending ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={isPending}
      >
        {isPending ? 'Registering...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default RegisterUserForm;
