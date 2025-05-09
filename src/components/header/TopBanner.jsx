import React from 'react'
import ArrowLeft from "/src/assets/arrowLeft.svg?react";
const TopBanner = () => {
  return (
    <div  className=" max-w-full overflow-hidden  relative text-grey flex py-[14px] gap-[14px] cursor-pointer w-full rounded-[8px] bg-secondary justify-center items-center self-stretch ">
         <img className=" absolute left-[-9px] w-auto h-full " src="/src/assets/banner01.svg" alt="top banner image"  />
         <img className=" absolute right-[-9px] w-auto h-full " src="/src/assets/banner02.svg" alt="top banner image"  />
         <img className=" absolute left-[75%] w-[39.55px] h-[39.59px] top-[29px] " src="/src/assets/banner03.svg" alt="top banner image"  />
         <img className=" absolute left-[25%] top-[-13px]  w-[72.3px] h-[72.4px] " src="/src/assets/banner04.svg" alt="top banner image"  />



          <div className=" flex gap-[14px]" >
          <p className="  text-[20px] font-medium font-outfit ">
            Admission is Open, Grap your seat now
          </p>
          <ArrowLeft />
          </div>
         
        </div>
  )
}

export default TopBanner
