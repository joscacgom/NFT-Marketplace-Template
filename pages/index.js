import React from 'react'
import {Hero , Service} from '../components/componentsIndex'
import Style from '../styles/index.module.css'
const Home = () => {
  return (
    <div className={Style.home}>
      <Hero/>
      <Service/>
    </div>
  )
}

export default Home