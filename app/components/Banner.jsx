import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowDown } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';

function Banner() {
  return (
    <div className="py-5 overflow-hidden relative">
      <div className="min-h-[80vh] md:min-h-[85vh] relative hover:-translate-y-1 hover:translate-x-1 duration-300">
        <div className="absolute left-0 top-20 md:top-15 lg:top-5 w-[160px] md:w-[300px] lg:w-[400px]border-2 border-black">
          <div className="relative w-full h-[110px] md:h-[200px] lg:h-[300px]">
            <Image src="/img1.jpg" alt="img1" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute w-[100px] md:w-[170px] lg:w-[250px] bottom-30 md:bottom-30 left-[10%]">
          <div className="relative w-full h-[80px] md:h-[150px] lg:h-[200px]">
            <Image src="/img2.jpg" alt="img2" fill className="object-contain" />
          </div>
        </div>
        <div className="absolute w-[150px] md:w-[220px] lg:w-[310px] bottom-10 md:bottom-0 left-[20%]">
          <div className="relative w-full h-[100px] md:h-[160px] lg:h-[210px]">
            <Image src="/img3.jpg" alt="img3" fill className="object-contain" />
          </div>{' '}
        </div>
        <div className="absolute w-[110px] md:w-[280px] lg:w-[350px] bottom-0 right-[15%] md:right-10 lg:right-[10%]">
          <div className="relative w-full h-[80px] md:h-[180px] lg:h-[250px]">
            <Image src="/img4.jpg" alt="img4" fill className="object-contain" />
          </div>
        </div>{' '}
        <div className="absolute top-30 right-0 w-[180px] md:w-[300px] lg:w-[380px] z-20">
          <div className="relative w-full h-[120px] md:h-[200px] lg:h-[250px]">
            <Image src="/img5.jpg" alt="img5" fill className="object-contain" />
          </div>{' '}
        </div>
        <div className="absolute top-12 md:top-6 lg:top-0 right-30 md:right-50 lg:right-72 w-[110px] md:w-[180] lg:w-[280]">
          <div className="relative w-full h-[90px] md:h-[150px] lg:h-[220px]">
            <Image src="/img6.jpg" alt="img6" fill className="object-contain" />
          </div>{' '}
        </div>
      </div>

      <div className="absolute top-[38%] w-full text-center z-50">
        <h1 className="text-[64px] md:text-[84px] lg:text-[128px] uppercase text-brick-red font-bold mb-4">
          Discover Your Perfect Aesthetic
        </h1>{' '}
        <button className="text-lg md:text-3xl font-semibold">
          <Link href="/all-tiles" className="flex items-center justify-center">
            Browse Now
            <span>
              <Icon data={ArrowDown} className="custom-icon" />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;
