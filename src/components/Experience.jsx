import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Iphone13Model } from './Iphone13Model'

export const Experience = () => {
  return (
    <>
    <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.5} autoRotateSpeed={10} autoRotate={true} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    <Iphone13Model />
    </>
  )
}
