import React from 'react';

export default function MafiaApp() {
  return (
    <section className='min-h-screen w-full'>
      <div className='flex justify-center text-xs sm:text-lg lg:text-3xl text-center'>
        Here are some of my first creations
      </div>
      <div className='w-full opacity-1'>
        <div className='flex flex-col items-center justify-center pt-10'>
          <h1 className='text-lg toRight sm:text-4xl pb-[11vh]'>MAFIA</h1>
          <div className='flex toRight flex-col md:flex-row items-center justify-center p-5 gap-11'>
            <p className='toRight p-11 w-full md:w-1/2 text-xs sm:text-xs md:text-lg'>
              As part of learning mobile development, I built a front-end replica of an app called Fitpass, 
              which my friends and I used to enter gyms and other facilities. The goal was to recreate 
              the user experience we were familiar with, focusing on UI and smooth navigation. This project helped me sharpen 
              my development skills and gain hands-on experience in mobile app design and functionality.
            </p>
            <img
              className='w-full mr-11 toRight md:w-1/2 rounded-2xl border-4'
              src="/Screenshots/MafiaScreenshot.png"
              alt="Mafia Screenshot"
            /> 
          </div>
        </div>
      </div>
    </section>
  );
}
