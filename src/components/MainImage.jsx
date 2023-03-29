import React from 'react'
import Image from "../Assets/Images/img-1.png"

const MainImage = () => {
  return (
    <div className="MainImage flex justify-center items-center pt-[4rem] pb-[3rem]">
        <img src={ Image } alt="MainImage" className='rounded-[2rem] w-[22rem] h-[12rem] object-cover' />
    </div>
  )
}

export default MainImage