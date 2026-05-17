'use client';
import Profile from '../../public/profile.jpg';
import React from 'react';
import { useSession } from '../lib/auth-client';
import Image from 'next/image';
import MainSkeleton from '../components/MainSkeleton';
import FeaturedTilesErrorBoundary from '../components/FeaturedTilesErrorBoundary';

function MyProfilePage() {
  const { data, isPending, error } = useSession();

  console.log('data', data);

  console.log('isPending', isPending);
  console.log('error', error);

  const user = data?.user;

  if (isPending) {
    return <MainSkeleton />;
  }

  if (error) {
    throw new Error('Data Fetching Failed.');
  }

  return (
    <div className="mx-auto w-fit">
      <div className="flex gap-10 py-10">
        <div className="w-[300px] h-[300px] rounded-full overflow-hidden relative">
          <Image src={Profile} alt="my-image" sizes="100vw" fill className="object-cover" />
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
