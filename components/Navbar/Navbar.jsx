import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {MdNotifications} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgMenuLeft} from 'react-icons/cg'
import {CgMenuRight} from 'react-icons/cg'

import Style from './Navbar.module.css'
import { Discover, Support, Notification, Profile, Sidebar} from './index'
import { Button } from '../componentsIndex'

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showDiscover, setShowDiscover] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setShowDiscover(!showDiscover);
      setShowNotification(false)
      setShowSupport(false)
      setShowProfile(false)
    } else if (btnText === "Support") {
      setShowSupport(!showSupport);
      setShowDiscover(false)
      setShowNotification(false)
      setShowProfile(false)
    } else if (btnText === "Notification") {
      setShowNotification(!showNotification);
      setShowDiscover(false)
      setShowSupport(false)
      setShowProfile(false)
    } else if (btnText === "Profile") {
      setShowProfile(!showProfile);
      setShowDiscover(false)
      setShowSupport(false)
      setShowNotification(false)
    }
  };

  const openNotif = () => {
    if(!showNotification){
      setShowNotification(true)
      setShowDiscover(false)
      setShowSupport(false)
      setShowProfile(false)
    }else{
      setShowNotification(false)
      setShowDiscover(false)
      setShowSupport(false)
      setShowProfile(false)
    }
  }

  const openProfile = () => {
    if(!showProfile){
      setShowProfile(true)
      setShowDiscover(false)
      setShowSupport(false)
      setShowNotification(false)
    }else{
      setShowProfile(false)
      setShowDiscover(false)
      setShowSupport(false)
      setShowNotification(false)

    }
  }

  const openSideBar = () => {
    if(!showSidebar){
      setShowSidebar(true)
      setShowDiscover(false)
      setShowSupport(false)
      setShowNotification(false)
      setShowProfile(false)
    }else{
      setShowSidebar(false)
      setShowDiscover(false)
      setShowSupport(false)
      setShowNotification(false)
      setShowProfile(false)
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* Left */}
        <div className={Style.navbar_container_left}>
          <div className={Style.navbar_container_left_logo}>
            <Image src="https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg" alt="" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search" />
              <BsSearch onClick={()=>{}} className={Style.navbar_container_left_box_input_box_icon} />
          </div>
        </div>

          {/* Right */}
          <div className={Style.navbar_container_right}>
            {/* Discover */}
            <div className={Style.navbar_container_right_discover}>
              <p onClick={(e)=> openMenu(e)}>Discover</p> 
              {showDiscover && ( 
                <div className={Style.navbar_container_right_discover_box}> 
                <Discover />  
                </div>)
              }
            </div>
            {/* Support */}
            <div className={Style.navbar_container_right_support}>
              <p onClick={(e)=> openMenu(e)}>Support</p>
              {showSupport && (
                <div className={Style.navbar_container_right_support_box}>
                  <Support />
                  </div>
              )}
            </div>
           
              {/* Button section */}
              <div className={Style.navbar_container_right_button}>
                <Button btnName='Create'handleClick={()=>{}} />
              </div>
            {/* Profile */}
            <div className={Style.navbar_container_right_profile}>
              <div className={Style.navbar_container_right_profile_box}>
                <FaUserCircle className={Style.navbar_container_right_profile_box_icon} height={40} width={40} onClick={()=>openProfile()} />
                {showProfile && <Profile />}
                </div>
              </div>

               {/* Notification */}
            <div className={Style.navbar_container_right_notification}>
                <MdNotifications className={Style.navbar_container_right_notification_box} onClick={()=>openNotif()}/>
              {showNotification && <Notification />}
              </div>

              {/* Menu for mobile devices */}
              <div className={Style.navbar_container_right_menu_btn}>
                <CgMenuRight className={Style.navbar_container_right_menu_btn_icon} onClick={()=>openSideBar()} />

              </div>
            </div>
          </div>
          {/* Sidebar */}
          {showSidebar && (
            <div className={Style.navbar_container_sidebar}>
              <Sidebar setShowSidebar={showSidebar}/> 
            </div>
          )}
        </div>
      </div>
     );
  
}
export default Navbar;