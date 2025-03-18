import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          {/*<Image
            src={assets.profile_img}
            alt="user"
            className="w-full rounded-3xl"
          />*/}
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            Hello! I'm Jung, a dedicated professional with a passion for
            building a bank. With experience inbanking, I thrive on challenges
            and continuously seek opportunities to leverage my skills in Related
            Skill or Technology. I strongly believe in the power of
            collaboration and innovation to drive success and make a meaningful
            impact. Currently, I am Your Current Position or Role at Your
            Company/Organization, where I focus on Your Main Responsibilities or
            Projects. I'm always eager to connect with others and share
            knowledge, so feel free to reach out!
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-200 hover:-translate-y-1 hover:translate-x-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-gray-800"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="font-semibold text-gray-700 my-4 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo dark:text-white">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-gray-200 hover:-translate-y-1 hover:translate-x-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
