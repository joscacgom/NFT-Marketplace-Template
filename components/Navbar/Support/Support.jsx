import React from 'react'
import Style from './Support.module.css'
import Link from 'next/link'


const Support = () => {

  const supportLinks = [
    {
      name:"About us",
      link:"about-us"
    },
    {
      name:"Contact us",
      link:"contact-us"
    },
    { 
      name:"Report",
      link:"report"
    },
    {
      name:"Subscription",
      link:"Subscription"
    },
    {
      name:"Sign up",
      link:"sign-up"
    },
    {
      name:"Sign in",
      link:"sign-in"
    }
  ]

  return (
    <div>{supportLinks.map((e,i)=>(
      <div key={i+1} className={Style.support}>
        <Link href={{pathname: `${e.link}`}}> {e.name} </Link>
      </div>
    ))}</div>
  )
}

export default Support