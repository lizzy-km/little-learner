import React from "react";

const Container = ({ subText, Header = "" ,subText2,cards,cards2,rating,col=true} ) => {
  return (
    <div  className=" flex flex-col items-center gap-[100px] w-full h-auto ">
      <div className=" flex flex-col px-[300px] gap-[19px] items-center ">
        <div style={{
          lineHeight:'150%'
        }} className=" flex px-[20px] border-2 font-medium text-[18px] font-outfit border-[#000] rounded-[8px] py-[10px] gap-[10px] items-start ">
          {subText}
        </div>
        <div
          style={{
            lineHeight: "130%",
          }}
          className=" text-grey text-center font-raleway text-[58px] font-bold "
        >
          {Header}
        </div>
        <div style={{
            lineHeight: "150%",
          }} className=" text-[#333] text-center font-outfit text-[20px] font-medium  " >
            {subText2}
        </div>
      </div>
      <div style={{
        flexDirection: col ?'column' :'row'
      }} className=" flex  gap-[50px]  w-full " >
      {cards}
      {cards2}
      </div>
      
    </div>
  );
};

export default Container;
