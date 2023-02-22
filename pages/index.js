import React from 'react'
import {Hero , Service, NFTSlider} from '../components/componentsIndex'
import Style from '../styles/index.module.css'
const Home = () => {
  return (
    <div className={Style.home}>
      <Hero/>
      <Service/>
      <NFTSlider/>
    </div>
  )
}

export default Home