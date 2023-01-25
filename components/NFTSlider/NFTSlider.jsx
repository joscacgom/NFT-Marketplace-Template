import React,{useState,useEffect,useCallback} from 'react'
import Image from 'next/image'
import { AiFillFire } from 'react-icons/ai'
import { MdVerified,MdTimer } from 'react-icons/md'
import Style from './NFTSlider.module.css'
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import Button from "../Button/Button";
const NFTSlider = () => {
    const [nftId,setNftId] = useState(1)
    const sliderData = [
    {
      title: "NFT 1",
      id: 1,
      name: "Paco Sanz",
      collection: "Estafadores",
      price: "00664 ETH",
      like: 89,
      image: "",
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
      id: 2,
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
      id: 3,
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
  return (
    <div>NFTSlider</div>
  )
}

export default NFTSlider