import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.chronomatic} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="text-lg md:text-2xl mb-3 font-ovo">welcome to my</h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        codingJourney
      </h1>

      <p className="max-w-2xl mx-auto font-ovo">
        I am self-teach(ing) and here is how I am getting better everyday.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border  border-white rounded-full bg-gray-900 text-white flex items-center gap-2 dark:hover:bg-gray-800"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          Join me
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
