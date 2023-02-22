import React,{useState} from 'react'
import Image from 'next/image'
import Style from './Sidebar.module.css'
import {GrClose} from 'react-icons/gr'
import {TiSocialFacebook,TiSocialTwitter,TiSocialInstagram,
  TiSocialYoutube,TiSocialLinkedin, TiArrowSortedDown,TiArrowSortedUp} from 'react-icons/ti'
import Button from '../../Button/Button'
import Link from 'next/link'
import Support from '../Support/Support'

const Sidebar = ({setShowSidebar}) => {
  const [showDiscover, setShowDiscover] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
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

  const support = [
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

  const openDiscover = () => {
    setShowDiscover(!showDiscover)
    setShowSupport(false)
  }

  const closeSideBar = () => {
    // close sidebar when click on close icon 
    
  }

  const openSupport = () => {
    setShowSupport(!showSupport)
    setShowDiscover(false)
  }
  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_close} onClick={()=> closeSideBar()}/>
      <div className={Style.sideBar_logo}>
        <Image src="https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg" width={50} height={50} alt="logo"/>
        <div className={Style.sideBar_social}>
          <TiSocialFacebook className={Style.sideBar_social_icon}/>
          <TiSocialTwitter className={Style.sideBar_social_icon}/>
          <TiSocialInstagram className={Style.sideBar_social_icon}/>
          <TiSocialYoutube className={Style.sideBar_social_icon}/>
          <TiSocialLinkedin className={Style.sideBar_social_icon}/>
        </div>
      </div>
      <div className={Style.sideBar_menu}> 
        <div className={Style.sideBar_menu_item}>
          <div className={Style.sideBar_menu_item_title} onClick={()=>openDiscover()}>
            <p>Discover</p>
            {showDiscover && <TiArrowSortedDown/>}
          </div>
          {showDiscover && (
            <div className={Style.sideBar_menu_item_content}>
             {discover.map((e,i)=>(
              <p key={i+1}> 
                <Link href={{pathname: `${e.link}`}} className={Style.sideBar_link_item}> {e.name} </Link>
              </p>
              ))}   
            </div>
          )}
        </div>
        <div>
          <div className={Style.sideBar_menu_item}>
          <div className={Style.sideBar_menu_item_title} onClick={()=>openSupport()}>
            <p>Support</p>
            {showSupport && <TiArrowSortedDown/> }
        </div>

        {showSupport && (
          <div className={Style.sideBar_menu_item_content}>
            {support.map((e,i)=>(
              <p key={i+1}>
                <Link href={{pathname: `${e.link}`}} className={Style.sideBar_link_item}> {e.name} </Link>
              </p>
            ))}
          </div>
        )}

          </div>
         
      </div>
    </div>
    <div className={Style.sideBar_button}>
      <Button btnName="Create" handleClick={()=>{}}/>
      <Button btnName="Connect Wallet" handleClick={()=>{}}/>
    </div>
  </div>
  )
}

export default Sidebar;