'use client';

import { Button } from '@heroui/react';
import { signOut, useSession } from '../lib/auth-client';
import Link from 'next/link';

function NavbarPage() {
  const { data, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  // console.log('Session data in Navbar: ', data);

  const user = data?.user;

  return (
    <div className=''>
      <nav className="w-full border-b px-6">
        <header className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="font-extrabold text-2xl font-stretch-125% ">Tiles Galore</p>
            </Link>
          </div>
          <ul className="flex items-center gap-6 text-base font-bold uppercase">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-tiles">All Tiles</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>

          <div className="flex gap-4 items-center">
            {user ? (
              <>
                <p>Welcome, {user.name}</p>
                <Button onClick={() => signOut()}>Sign Out</Button>
              </>
            ) : (
              <>
                <Link className="no-underline" href="/auth/signin">
                  <Button className="">Sign In</Button>
                </Link>
              </>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
}

export default NavbarPage;
