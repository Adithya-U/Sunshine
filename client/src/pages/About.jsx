
import React from 'react';
import { FaHome, FaCalendarAlt, FaLightbulb, FaCogs } from 'react-icons/fa';

export default function About() {
  return (
    <div
      id="about"
      className="bg-[#fffff6] py-16 px-6 md:px-24 font-visby text-[#222]"
    >
      <h2 className="text-4xl font-bold mb-10">Our Story</h2>

      {/* Icon Summary Row (Left Aligned) */}
      <div className="flex flex-wrap gap-12 mb-12">
        <div className="min-w-[150px] flex flex-col items-start">
          <FaHome size={32} className="text-[#3a6d63]" />
          <p className="mt-2 font-semibold">400+ Homes Built</p>
        </div>
        <div className="min-w-[150px] flex flex-col items-start">
          <FaCalendarAlt size={32} className="text-[#3a6d63]" />
          <p className="mt-2 font-semibold">50+ Years Experience</p>
        </div>
        <div className="min-w-[150px] flex flex-col items-start">
          <FaLightbulb size={32} className="text-[#3a6d63]" />
          <p className="mt-2 font-semibold">Smart Living Focus</p>
        </div>
        <div className="min-w-[150px] flex flex-col items-start">
          <FaCogs size={32} className="text-[#3a6d63]" />
          <p className="mt-2 font-semibold">Premium Quality</p>
        </div>
      </div>

      {/* Justified Paragraphs */}
      <div className="leading-relaxed space-y-6 text-justify max-w-6xl">
        <p>
          Sunshine Builders has been a cornerstone of construction in and around Pammal for over 50 years. With over 400 homes built, our legacy is rooted in precision, trust, and craftsmanship.
        </p>
        <p>
          In 2005, we transitioned into modern apartment development—bringing contemporary living trends into our time-honored tradition of excellence.
        </p>
        <p>
          We hold ourselves to the highest standards, from the foundation to the final finish. Our homes are built with premium materials, innovative techniques, and a deep respect for quality.
        </p>
        <p>
          Today, our focus includes energy-efficient designs, smart home features, and the fusion of tradition with next-gen innovation.
        </p>
        <p>
          At Sunshine Builders, we don’t just build homes—we create lifestyles. Experience the Sunshine difference, where quality knows no compromise.
        </p>
      </div>
    </div>
  );
}
