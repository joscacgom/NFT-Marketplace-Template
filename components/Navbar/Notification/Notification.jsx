import React from 'react'
import Image from 'next/image'
import Style from './Notifications.module.css'

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}> 
        <div className={Style.notification_box_icon}>
          <Image src="" width={20} height={20} alt="Notification" className={Style.notification_img} />
      </div>
      <div className={Style.notification_box_text}>
        <h4>Nombre usuario</h4>
        <p>Texto de la notificación</p>
        <small>5 mins ago</small>
      </div>
      <span className={Style.notification_box_close}></span>
      </div>
    </div>
  )
}

export default Notification