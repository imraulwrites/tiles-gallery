import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <div className="py-5 overflow-hidden relative">
      <div className="min-h-[80vh] relative hover:-translate-y-1 hover:translate-x-1 duration-300 ">
        <div className="absolute left-0 top-0 w-2xs">
          <div className="relative  w-full h-[150px] md:h-[200px]">
            <Image src="/img1.jpg" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute w-2xs bottom-30     left-[10%]">
          <div className="relative w-full h-[150px] md:h-[200px]">
            <Image src="/img2.jpg" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute w-2xs bottom-0 left-[20%]">
          <div className="relative w-full h-[150px] md:h-[200px]">
            <Image src="/img3.jpg" fill className="object-contain" />
          </div>{' '}
        </div>
        <div className="absolute w-2xs bottom-0 right-[15%]">
          <div className="relative w-full h-[150px] md:h-[200px]">
            <Image src="/img4.jpg" fill className="object-contain" />
          </div>
        </div>{' '}
        <div className="absolute top-25 right-2 w-2xs z-20">
          <div className="relative w-full h-[150px] md:h-[200px]">
            <Image src="/img5.jpg" fill className="object-contain" />
          </div>{' '}
        </div>
        <div className="absolute top-0 right-40 w-2xs">
          <div className="relative w-full h-[150px] md:h-[200px]">
            <Image src="/img6.jpg" fill className="object-contain" />
          </div>{' '}
        </div>
      </div>

      <div className="absolute top-[45%] w-full text-center">
        <h1 className="text-6xl uppercase text-brick-red font-bold mb-4">
          Discover Your Perfect Aesthetic
        </h1>{' '}
        <button>
          <Link href="/all-tiles">Browse Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;
