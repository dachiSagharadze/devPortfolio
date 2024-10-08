import React from 'react'

export default function ExperienceModels() {
  return (
    <section className='h-auto w-full'>
    <div className='flex justify-center text-xs sm:text-3xl'>Here are some of my first creations</div>
    <div className='w-full toRight opacity-1'>
        <div className='flex items-center justify-center flex-col h-[100vh]  mt-[10vh]'>
          <h1 className='text-lg sm:text-4xl mt-11'>MAFIA</h1>
          <div className='flex flex-1 flex-col sm:flex-colum md:flex-row items-center justify-center p-[5vh] gap-11'>
              <p className='w-full sm:w-full md:w-1/2 text-xs sm:text-xs md:text-lg '>
              My first web page was about a game called MAFIA, which my friends and I enjoyed playing a lot.
              Inspired by that experience, I decided to create a functional notebook for the game host.
              </p>
              <img className='w-full sm:w-full md:w-1/2 rounded-2xl' src="/Screenshots/MafiaScreenshot.png" alt="Mafia.PNG"/> 
          </div>
        </div>
    </div>
</section> 
  )
}
