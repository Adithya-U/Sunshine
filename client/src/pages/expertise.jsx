// import React from 'react';
import { FaHome, FaRulerCombined, FaPaintRoller, FaHandshake } from 'react-icons/fa';

export default function Expertise() {
  return (
    <div className="bg-[#fffff6] text-everglade px-10 py-16 font-raleway">
      <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#c5c7b2] h-56 p-6 shadow-md flex flex-col">
          <FaRulerCombined className="text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Renovations & Extensions</h3>
          <p className="text-sm">Enhancing and expanding living spaces.</p>
        </div>
        <div className="bg-[#c5c7b2] h-56 p-6 shadow-md flex flex-col">
          <FaHome className="text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Residential Builds</h3>
          <p className="text-sm">Tailored solutions for your dream home.</p>
        </div>
        <div className="bg-[#c5c7b2] h-56 p-6 shadow-md flex flex-col">
          <FaPaintRoller className="text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Interior & Exterior Design</h3>
          <p className="text-sm">Creating functional and aesthetically pleasing spaces.</p>
        </div>
        <div className="bg-[#c5c7b2] h-56 p-6 shadow-md flex flex-col md:col-span-2">
          <FaHandshake className="text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2">Joint Ventures</h3>
          <p className="text-sm">Collaborate with us to build apartments on your land and share in the profits.</p>
        </div>
      </div>
    </div>
  );
}
