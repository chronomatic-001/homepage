'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '84d91a09-a016-499d-b4f7-3bfd8252d443');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I love to hear from you! If you have any questions, comments, and
        feedback please use the form below. Thank you
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder:text-white/80"
          />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-500 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder:text-white/80"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-500 rounded-md bg-white mb-6 dark:bg-gray-800 dark:text-white dark:placeholder:text-white/80"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent  dark:text-white dark:border dark:border-white  dark:hover:bg-gray-800 "
        >
          Submit
          <Image src={assets.right_arrow_white} alt="" className="w-4 " />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;

//bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] INSDIE FIRST DIV
