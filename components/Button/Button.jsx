import React from 'react'
import Style from './Button.module.css'

const Button = ({btnName,handleClick}) => {
  return (
    <div className={Style._box}>
      <button onClick={()=>handleClick()} className={Style.button}>
        {btnName} 
      </button>     
    </div>
  )
}

export default Button