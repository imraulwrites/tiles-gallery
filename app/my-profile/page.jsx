'use client';
import Profile from '../../public/profile.jpg';
import React from 'react';
import { useSession } from '../lib/auth-client';
import Image from 'next/image';

function MyProfilePage() {
  const { data, isPending } = useSession();

  console.log('data', data);

  const user = data?.user;

  return (
    <div className="mx-auto w-fit">
      {/* <h2 className="text-4xl font-semibold mb-5">My Profile</h2> */}

      <div className="flex gap-10 py-10">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden relative">
          <Image src={Profile} alt='my-image' sizes="100vw" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-semibold pb-5 uppercase">{user?.name}</h3>
          <h4 className="text-xl italic font-semibold">{user?.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default MyProfilePage;
