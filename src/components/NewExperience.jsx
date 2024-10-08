import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { GooglePixelModel } from './GooglePixelModel'

export const NewExperience = () => {
  return (
    <>
    <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.5} autoRotateSpeed={10} autoRotate={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    <GooglePixelModel />
    </>
  )
}
