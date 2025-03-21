import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">what I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        M.S. in Computational Finance, Goldman Sachs, Merrill Lynch, TD Canada
        Trust. I love to build apps using most up-to-date technologies solving
        the issues that people give up.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer  hover:bg-cyan-100 hover:-translate-y-1 hover:translate-x-1 hover:shadow-md duration-500 dark:hover:bg-gray-800 dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a
              target="_blank"
              href={link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              read more
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
