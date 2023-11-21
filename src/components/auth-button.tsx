'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import Link from 'next/link';

type Props = {};

const AuthButton = (props: Props) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() =>
          signOut({
            callbackUrl: '/',
          })
        }
      >
        Sign Out
      </button>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

export default AuthButton;
