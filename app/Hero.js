import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mx-auto my-[4rem] px-4 lg:px-[8.6rem] flex flex-col lg:flex-row justify-between items-center">
      {/* Left side with text */}
      <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
        <div className="my-8">
          <span className="text-black bg-white py-1 px-3 rounded-lg text-4xl sm:text-5xl font-semibold">One</span>
          <span className="text-black bg-white mx-4 py-1 px-3 rounded-lg text-4xl sm:text-5xl font-semibold">Stop</span> <br />
        </div>
        <span className="text-black bg-white py-2 px-3 rounded-lg text-4xl sm:text-5xl font-semibold">Marketplace</span><br />
        <div className="my-8">
          <span className="text-black bg-white py-1 px-3 rounded-lg text-4xl sm:text-5xl font-semibold">For</span>
          <span className="text-black bg-[#00DC82] mx-4 py-1 px-3 rounded-lg text-4xl sm:text-5xl font-semibold">Influencers</span>
        </div>
        <div className='font-semibold text-xl sm:text-3xl mb-6'>
          "Unleash Your Influence: Sell<br />Itenaries, Build Your Brand,<br />Create Merch, and Share<br />Content - All in One Hub."
        </div>
        <div>
          <button className='bg-[#00DC82] text-black px-4 py-2 rounded-xl text-center font-semibold'>Demo Store</button>
          <button className='mx-5 relative inline-block px-4 py-2 font-semibold text-transparent bg-gradient-to-r from-[#ff5d5d] to-[#4794ff] bg-clip-text border-[1px] border-transparent rounded-2xl hover:text-white'
            style={{ borderImage: 'linear-gradient(to right, #ff5d5d, #4794ff) 1' }}>
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Right side with image */}
      <div className="w-full lg:w-1/2 bg-[url('/images/hero.png')] bg-cover bg-center h-80 lg:h-auto"></div>
    </div>
  );
}

export default Hero;
