import React,{useState,useEffect,useCallback} from 'react'
import Image from 'next/image'
import { AiFillFire, AiFillHeart } from 'react-icons/ai'
import { MdVerified,MdTimer } from 'react-icons/md'
import Style from './NFTSlider.module.css'
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import Button from "../Button/Button";
import { IncrementalCache } from 'next/dist/server/lib/incremental-cache'
const NFTSlider = () => {
    const [id,setNftId] = useState(0)
    const sliderData = [
    {
      title: "NFT 1",
      id: 0,
      name: "Paco Sanz",
      collection: "Estafadores",
      price: "00664 ETH",
      like: 89,
      image: "https://valenciaplaza.com/public/Image/2017/3/Capturadepantalla2017-03-21alas20.52.34.png_NoticiaAmpliada.jpg",
      nftImage: "",
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "NFT 2",
      id: 1,
      name: "Paco Sanz",
      collection: "Estafadores",
      price: "0000004 ETH",
      like: 243,
      image: "",
      nftImage: "",
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "NFT 3",
      id: 2,
      name: "Paco Sanz",
      collection: "Estafadores",
      price: "0000064 ETH",
      like: 243,
      image: "",
      nftImage: "",
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    }
    ]

    const incrementNftId=useCallback(()=>{
        if(id+1<sliderData.length){
           setNftId(id+1)
        }
    },[id,sliderData.length])
    const decrementNftId= useCallback(()=>{
        if(id-1>=0){
          setNftId(id-1)
      }
    },[id,sliderData.length])
  return (
    <div className={Style.slider}>
      
      <div className={Style.slider_box}>
        <div className={Style.slider_box_left}> 
            <h2>{sliderData[id].title} </h2>
            <div className={Style.slider_box_left_author}>
              <div className={Style.slider_box_left_author_profile}>
                <Image 
                className={Style.slider_box_left_author_profile_image}
                src={sliderData[id].image} 
                alt="author" 
                width={50} 
                height={50} />
                <div className={Style.slider_box_left_author_profile_info}>
                  <p>Author</p>
                  <h4>{sliderData[id].name} <span><MdVerified></MdVerified></span></h4>
                </div>
              </div>
              <div className={Style.slider_box_left_author_collection}>
                <AiFillFire className={Style.collection_icon}></AiFillFire>

                <div className={Style.slider_box_left_author_collection_info}>
                  <p>Collection</p>
                  <h4>{sliderData[id].collection}</h4>
                </div>
              </div>
            </div>
            <div className={Style.slider_box_left_price}>
              <div className={Style.slider_box_left_price_box}>
                <p>Current price</p>
                <h4>{sliderData[id].price} <span>$221,21</span></h4>
              </div>
              <p className={Style.slider_box_left_price_auction}>
                <MdTimer className={Style.auction_icon}></MdTimer> Auction ends in
              </p>

              <div className={Style.slider_box_left_price_auction_timer}>
                <div className={Style.slider_box_left_price_auction_timer_item}>
                  <p>{sliderData[id].time.days} <span>Days</span></p>

                </div>

                <div className={Style.slider_box_left_price_auction_timer_item}>
                  <p>{sliderData[id].time.hours} <span>Hours</span></p>
                  
                </div>

                <div className={Style.slider_box_left_price_auction_timer_item}>
                  <p>{sliderData[id].time.minutes} <span>Minutes</span></p>
                  
                </div>

                <div className={Style.slider_box_left_price_auction_timer_item}>
                  <p>{sliderData[id].time.seconds} <span>Seconds</span></p>
                  
                </div>
              </div>

              <div className={Style.slider_box_left_price_auction_button}>
                <Button text="Place a bid" handleClick={()=>{}}></Button>
                <Button text="Check" handleClick={()=>{}}></Button>
              </div>
            </div>

            <div className={Style.slider_box_left_button_slider}>
              <TbArrowBigRightLine 
              className={Style.slider_box_left_button_slider_icon}
              onClick={()=>incrementNftId()}
              ></TbArrowBigRightLine>

            <TbArrowBigLeftLine 
              className={Style.slider_box_left_button_slider_icon}
              onClick={()=>decrementNftId()}
              ></TbArrowBigLeftLine>
            </div>
        </div>  
        <div className={Style.slider_box_right}>
          <div className={Style.slider_box_right_box}>
            <Image 
            src={sliderData[id].nftImage}
            alt="NFT Image">
            </Image>

            <div className={Style.slider_box_right_box_like}>
              <AiFillHeart className={Style.like_icon}></AiFillHeart>
              <span>{sliderData[id].like}</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NFTSlider