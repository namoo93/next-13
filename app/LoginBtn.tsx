'use client';
import { signIn, signOut } from 'next-auth/react';

export default function LoginBtn({
  user,
}: {
  user: {
    name: string;
    email: string;
    image: string;
  };
}) {
  return (
    <>{user ? <button onClick={() => signOut()}>Log out</button> : <button onClick={() => signIn()}>Log in</button>}</>
  );
}
