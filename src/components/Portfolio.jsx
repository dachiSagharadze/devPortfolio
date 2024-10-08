import React from 'react';

export default function Portfolio() {
  return (
    <section className='min-h-screen mt-[-20vh] flex flex-col justify-center items-center w-full'>
      <div className='w-full flex flex-col items-center'>
        <h1 className='text-lg sm:text-4xl toRight3 pb-[11vh]'>First Portfolio</h1>
        <div className='flex flex-col md:flex-row items-center justify-center w-full'>
          <p className='p-11 toRight3 text-xs sm:text-xs md:text-lg w-full md:w-1/2'>
            Following the Fitpass replica project, I took on the challenge of building the entire front-end
            for my portfolio from scratch. This process not only sharpened my React.js skills but also taught me
            how to create smooth, engaging animations that bring websites to life.
          </p>
          <img
            className='pb-11 mr-11 toRight3 w-2/3 sm:w-2/4 md:w-2/5 h-auto rounded-2xl border-4'
            src="/Screenshots/PortfolioScreenShot.png"
            alt="Portfolio Screenshot"
          />
        </div>
      </div>
    </section>
  );
}
