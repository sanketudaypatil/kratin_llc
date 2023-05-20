import React from 'react'
import "./style.scss"
import MainBanner from './mainBanner/MainBanner'
import Features from './features/Features'
import MenHealth from "./menHealth/Menhealth"

import ChildHealth from "./childHealth/ChildHealth"


const Home = () => {
  return (
    <div className='homePage'>
      <MainBanner/>
      <Features/>
      <MenHealth/>
      <ChildHealth/>
      
         
     
    </div> 
  )
}

export default Home
