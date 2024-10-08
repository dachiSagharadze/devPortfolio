import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'
import MafiaApp from './MafiaApp'
import FitpassApp from './FitpassApp'
import Portfolio from './Portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function MyApps() {


  const useGsapAnimation = (className) => {
    useEffect(() => {
      gsap.fromTo(
        className,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: className,
            start: 'top 80%',
            markers: false,
          },
        }
      );
    }, []);
  };

  useGsapAnimation('.toRight')
  useGsapAnimation('.toRight2')
  useGsapAnimation('.toRight3')



  return (
    <>
    <MafiaApp /> 
    <FitpassApp />
    <Portfolio />
    </>
  )
}
