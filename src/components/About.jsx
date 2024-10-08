import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="w-full min-h-[100vh] flex-center">
      <div className='mt-11 h-[40rem] overflow-y-auto w-[25rem] sm:w-[30rem] md:w-[45rem] lg:w-[50rem] bg-[#1E1E1E] rounded-3xl'>
        <div className='flex items-center p-[1rem] gap-2'>
          <img src='./Screenshots/DachiSagharadze.PNG' className='bg-white rounded-full h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4rem] lg:h-[5rem] lg:w-[5rem]' />
          <div className='flex flex-col'>
            <p className='text-[0.5rem] sm:text-[0.6rem] md:text-[0.8rem]'>DachiSagharadze</p>
            <p className='text-[0.3rem] sm:text-[0.4rem] md:text-[0.6rem] text-gray-400'>@dachisagharadze</p>
          </div>
          <p className='text-gray-400 mb-[0.3rem] sm:mb-[0.45rem] md:mb-[0.72rem] lg:mb-[0.75rem] items-center text-[0.3rem] sm:text-[0.5rem] md:text-[0.56rem] lg:text-[0.55rem]'>6:51  PM - 6 Oct 2024</p>
        </div>
        <p className='pr-5 pl-5 fancyText text-[0.74rem] sm:text-[0.79rem] md:text-[0.93rem] lg:text-[0.98rem]'>
          I first started programming at the age of 11 in the Mziuri Informative Technology Center (mziuri.ge),
           where I built my first program. My first language was Free Pascal, followed by C++, which quickly became my favorite. 
           Back then, I was really motivated and took part in coding tournaments, though my experience with C++ was mainly in problem-solving.<br/><br/>
          At some point, I fell in love with football and decided to pursue that instead, taking a break from programming. Unfortunately,
           due to vision problems, I wasn’t able to play football at a high level, which led me back to coding.<br/><br/>
          About three years ago, I joined BTU (Business and Technology University) and rekindled my programming career.
           I learned the basics of HTML, CSS, JavaScript, React, Kotlin, and Java. Since then, I've realized just how much I enjoy coding,
            and I'm fully committed to it now. I believe my unique background gives me an edge—I pick up new things quickly, 
            and with enough time, I feel capable of tackling almost anything.
          Feel free to reach out. <br/><br/><br/><br/><br/><br/>
          I’d love to connect!</p>
      </div>
    </section>
  );
}
