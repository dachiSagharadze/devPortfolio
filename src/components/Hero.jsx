import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1,
            duration: 2,
        })
    }, [])
    useGSAP(() => {
        gsap.from('#studentHero', {
            opacity: 0,
            delay: 3,
            duration: 0.5,
            y: -100
        })
    }, [])

    useGSAP(() => {
        gsap.from('#TryingHero', {
            delay: 3,
            duration: 0.5,
            opacity: 0,
        })
    }, [])

    const timeline = gsap.timeline()
    useGSAP(() => {
        timeline.to('#FullStackHero', {
            opacity: 1,
            delay: 1,
            duration: 2,
        })

        const xOffset = 
            window.innerWidth < 640 ? -100 : window.innerWidth < 768 ? -100 : -170

        timeline.from('#FullStackHero', {
            delay: 0,
            x: xOffset,
        })
    }, [])

    useGSAP(() => {
        gsap.from('#arrow' , {
            y: 150,
            delay: 3,
            opacity: 0,
        })
    }, [])
    

    useEffect(() => {
        gsap.to('.gaqri', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.gaqri',
                start: 'top 1%',
                end: 'bottom 40%',
                scrub: true,
                markers: false,
            }
        })
    }, [])

  return (
    <section className='w-full h-[100vh] relative gaqri'>
        <div className='w-full h-full flex-center flex-col text-xs md:text-xl'>
            <p id='studentHero' className='opacity-1'>STUDENT</p>
            <p id='hero' className='hero-title'>Hey, I'm Dachi</p>
            <div className='flex gap-3 w-full justify-center'>
                <p id='TryingHero' className='opacity-1'>Trying to become</p>
                <p id='FullStackHero' className='opacity-0'>full stack developer</p>
            </div>
            <div id='arrow' className='flex gap-6 relative'>
                <a href="https://www.instagram.com/dachisagharadze/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/dachiSagharadze" target='_blank'><i class="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/dachi-sagharadze-b3460a32a" target='_blank'><i class="fa-brands fa-linkedin"></i></a>

                </div>
            <i id="arrow" className="fa-solid fa-arrow-down bottom-5 absolute opacity-1"></i>
        </div>
    </section>
  )
}
