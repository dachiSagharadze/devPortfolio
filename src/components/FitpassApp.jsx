import React from 'react';

export default function FitpassApp() {
  return (
    <section className='min-h-screen flex justify-center w-full'>
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-lg sm:text-4xl toRight2 pb-[11vh]'>Fitpass Replica</h1>
        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
          <img
            className='pb-11 toRight2 w-2/3 sm:w-2/4 md:w-2/5 rounded-2xl'
            src="/Screenshots/ImageForPortfolio.png"
            alt="Fitpass PNG"
          />
          <p className='p-11 toRight2 text-xs sm:text-xs md:text-lg w-full md:w-1/2'>
            My first web page was about a game called MAFIA, which my friends and I enjoyed playing a lot.
            Inspired by that experience, I decided to create a functional notebook for the game host.
          </p>
        </div>
      </div>
    </section>
  );
}
