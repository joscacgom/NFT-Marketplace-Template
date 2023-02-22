import React from 'react'
import Style from './Service.module.css'
import Image from 'next/image'
const Service = () => {
  return (
    <div className={Style.service_container}>
        <div className={Style.service_container_box}>
            <div className={Style.service_container_box_item}>
                <Image src="https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg" alt="" width={100} height={100} />
                <p className={Style.service_container_box_item_title}>Step 1</p>
                <h3>Discover DeFi products</h3>
                <p className={Style.service_container_box_item_title}>
                    Connect your wallet to the app and discover
                    the best DeFi products for you.
                </p>

            </div>

             <div className={Style.service_container_box_item}>
                <Image src="https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg" alt="" width={100} height={100} />
                <p className={Style.service_container_box_item_title}>Step 2</p>
                <h3>Discover DeFi products</h3>
                <p className={Style.service_container_box_item_title}>
                    Connect your wallet to the app and discover
                    the best DeFi products for you.
                </p>

            </div>

             <div className={Style.service_container_box_item}>
                <Image src="https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg" alt="" width={100} height={100} />
                <p className={Style.service_container_box_item_title}>Step 3</p>
                <h3>Discover DeFi products</h3>
                <p className={Style.service_container_box_item_title}>
                    Connect your wallet to the app and discover
                    the best DeFi products for you.
                </p>

            </div>
        </div>

    </div>
  )
}

export default Service