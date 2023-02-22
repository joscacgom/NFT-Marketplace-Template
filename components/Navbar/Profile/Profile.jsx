import React from 'react'
import Image from 'next/image'
import Style from './Profile.module.css'
import { FaUserAlt,FaUserEdit,FaRegImage } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import {TbDownloadOff,TbDownload} from 'react-icons/tb'
import Link from 'next/link'

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image src="https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg" width={40} height={40} alt="Profile" className={Style.profile_img} />
        <div className={Style.profile_info}>
          <p>Name</p>
          <small>34545645667567567</small>
        </div>
      </div>
      <div className={Style.profile_menu}> 
        <div className={Style.profile_menu_item}>
          <div className={Style.profile_menu_item_icon}>
            <FaUserAlt />
            <p> <Link href={{pathname: '/myProfile'}}> My profile</Link></p>

          </div>
           <div className={Style.profile_menu_item_icon}>
            <FaRegImage />
            <p> <Link href={{pathname: '/myItems'}}> My items</Link></p>
            
          </div>
           <div className={Style.profile_menu_item_icon}>
            <FaUserEdit />
            <p> <Link href={{pathname: '/editProfile'}}> Edit profile</Link></p>
          </div>
        </div>

        <div className={Style.profile_menu_item_2}> 
          <div className={Style.profile_menu_item_icon}> 
            <MdHelpCenter />
            <p> <Link href={{pathname: '/support'}}> Support</Link></p>
          </div>
           <div className={Style.profile_menu_item_icon}> 
            <TbDownload/>
            <p> <Link href={{pathname: '/disconnect'}}> Disconnect</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;