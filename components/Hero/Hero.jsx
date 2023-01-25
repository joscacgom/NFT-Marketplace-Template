import React from 'react'
import Image from 'next/image'
import Style from './Hero.module.css'
import Button  from '../Button/Button'
const Hero = () => {
  return (
    <div className={Style.hero_container}>
      <div className={Style.hero_container_box}>
        <div className={Style.hero_container_box_left}>
          <h1>Lorem, ipsum dolor sit amet consectetur</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <Button btnName="Get Started" handleClick={()=>{}} />
        </div>
        <div className={Style.hero_container_box_right}>
          <Image src="" alt="" width={100} height={100} />
        </div>
      </div>
      
    </div>
  )
}

export default Hero