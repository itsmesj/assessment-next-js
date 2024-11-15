import React from 'react';
import Image from 'next/image';
import bgImg1 from "../public/travel1.png";

const Travel = () => {
  return (
    <div>
      <div className='bg-black mx-4 sm:mx-8 md:mx-16 lg:mx-28 py-4'>
        <ul className='flex justify-between items-center text-xl sm:text-2xl font-semibold mx-4 sm:mx-14'>
          <li className='hover:border-b-[1px] border-white pb-1'>Travel</li>
          <li className='hover:border-b-[1px] border-white pb-1'>Digital</li>
          <li className='hover:border-b-[1px] border-white pb-1'>Brand</li>
          <li className='hover:border-b-[1px] border-white pb-1'>Merch</li>
        </ul>
      </div>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-4 relative'>
        {/* Adjust the width for smaller devices */}
        <Image
          src={bgImg1}
          alt='background image'
          width={1000}  // Increase the width for better appearance on phones and tablets
          height={700}  // Adjust the height to maintain aspect ratio
          className='w-full rounded-xl object-cover'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4'>
          {/* Increased font sizes for better readability */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
            TRAVEL
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6 font-semibold">
            Turn your travel experience into itinerary,<br />
            travel package with VYB Store and share it<br />
            with your true followers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
