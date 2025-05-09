import React from 'react'
import ArrowLeft from "/src/assets/arrowLeft.svg?react";
import BannerOne from "/src/assets/banner01.svg?react";
import BannerTwo from "/src/assets/banner02.svg?react";
import BannerThree from "/src/assets/banner03.svg?react";
import BannerFour from "/src/assets/banner04.svg?react";



const TopBanner = () => {
  return (
    <div  className=" max-w-full overflow-hidden  relative text-grey flex py-[14px] gap-[14px] cursor-pointer w-full rounded-[8px] bg-secondary justify-center items-center self-stretch ">
         <div className=" absolute left-[-9px] w-auto h-full "   >
          <BannerOne/>
         </div>
         <div className=" absolute right-[-9px] w-auto h-full "   >
          <BannerTwo/>
         </div>
         <div className=" absolute left-[75%] w-[39.55px] h-[39.59px] top-[29px] " >
          <BannerThree/>
         </div>
         <div className=" absolute left-[25%] top-[-13px]  w-[72.3px] h-[72.4px] " >
          <BannerFour/>
         </div>



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
