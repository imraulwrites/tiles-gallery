'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 py-20 md:py-32 w-full min-h-[70vh]  text-center">
      <h2 className="text-2xl font-semibold">404 Product Not Found.</h2>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <button
          className="bg-gray-200 text-sm border rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-300 duration-300 w-fit"
          onClick={() => unstable_retry()}
        >
          Try again
        </button>

        <button className="bg-gray-200 text-sm border rounded-md px-3 py-1.5 cursor-pointer hover:bg-gray-300 duration-300">
          <Link href="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
}
