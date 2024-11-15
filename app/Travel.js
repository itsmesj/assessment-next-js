import React from 'react';
import Image from 'next/image';
import bgImg1 from "../public/travel1.png";
const Travel = () => {
  return (
    <div>
      <div className='bg-black mx-28 py-4'>
        <ul className='flex justify-between items-center text-2xl font-semibold mx-14'>
          <li className='hover:border-b-[1px] border-white pb-1'>Travel</li>
          <li className='hover:border-b-[1px] border-white pb-1'>Digital</li>
          <li className='hover:border-b-[1px] border-white pb-1'>Brand</li>
          <li className='hover:border-b-[1px] border-white pb-1'>Merch</li>
        </ul>
      </div>
      <div className='mx-28 my-4 relative'>
        <Image src={bgImg1} alt='background image' width={800} height={600} className='w-full rounded-xl' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold">TRAVEL</h1>

        <p className="text-2xl mt-8 font-semibold">Turn your travel experience into itinerary,<br/>travel package with VYB Store and share it<br/>with your true followers.</p>
      </div>
    </div>

  </div>
  )
}

export default Travel;
