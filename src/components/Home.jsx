import React from 'react'
import Hero from './Hero'
import Model from './model'
import MyApps from './MyApps'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <div id="heroPage"><Hero /></div>
    <div id="modelPage"><Model /></div>
    <div id="appsPage"><MyApps /></div>  
    </>
  )
}
