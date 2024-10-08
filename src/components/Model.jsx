import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Experience } from './Experience'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { NewExperience } from './NewExperience'

gsap.registerPlugin(ScrollTrigger)

export default function Model() {

  useEffect(() => {
    gsap.to('.gaqri2',{
      opacity: 1,
      scrollTrigger: { 
        trigger: '.gaqri2',
        start: 'top 80%',
        end: 'top 10%',
        markers: false,
        scrub: true,
      }
    })
    gsap.fromTo('.gaqri2',{},{
      opacity: 0,
      scrollTrigger: { 
        trigger: '.gaqri2',
        start: 'bottom 80%',
        end: 'bottom 30%',
        markers: false,
        scrub: true,
      }
    })
  }, [])



  return (
    <section className='common-padding gaqri2 opacity-0'>
        <div className='screen-max-width'>
            <h1 id="heading" className='section-heading flex items-center justify-center vh-[10] text-xs sm:text-lg'>
                I can also work on IOS/ANDROID
            </h1>
            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[90vh] mdh-[95vh] relative flex-center'>
                  <Canvas>
                    <directionalLight intensity={5} position={[10, 5, 10]}/>
                    <directionalLight intensity={10} position={[-10, 10, -10]}/>
                    <Experience />
                  </Canvas>
                  <Canvas>
                    <directionalLight intensity={15} position={[10, 5, 10]}/>
                    <directionalLight intensity={10} position={[-10, 10, -10]}/>
                    <NewExperience />
                  </Canvas>
                </div>
            </div>
        </div>
    </section>
  )
}
