import React from 'react'
import Style from './Discover.module.css'
import Link from 'next/link'


const Discover = () => {

  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"Author",
      link:"author"
    },
    {
      name:"NFT details",
      link:"nft-details"
    },
    {
      name:"Account settings",
      link:"account-settings"
    },
    {
      name:"Connect wallet",
      link:"connect-wallet"
    },
    {
      name:"Create collection",
      link:"create-collection"
    },
    {
      name:"Blog",
      link:"blog"
    },

  ]

  return (
    <div>{discover.map((e,i)=>(
      <div key={i+1} className={Style.discover}> 
        <Link href={{pathname: `${e.link}`}}> {e.name} </Link>
      </div>
     
      ))}</div>
  )
}

export default Discover