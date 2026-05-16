'use client';

import { signOut, useSession } from '../lib/auth-client';
import Link from 'next/link';
import { Button } from '@heroui/react';

export default function SignInStatus() {
  const { data, isPending, error } = useSession();

  if (isPending) {
    return <div className="text-sm font-light">Loading...</div>;
  }

  if (error) {
    return <div className="text-sm font-light">Loading...</div>;
  }

  const user = data?.user;

  return (
    <div className="flex gap-4 items-center text-center md:text-left">
      {user ? (
        <>
          <p>
            {' '}
            <Link href="/my-profile"> Welcome, {user.name} </Link>
          </p>
          <Button className="bg-[#232323] hover:bg-[#232323]/90" onClick={() => signOut()}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Link className="no-underline" href="/auth/signin">
            <Button className="bg-[#232323] hover:bg-[#232323]/90">Sign In</Button>
          </Link>
        </>
      )}
    </div>
  );
}
