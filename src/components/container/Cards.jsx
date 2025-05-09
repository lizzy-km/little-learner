import React, { useState } from "react";
import MinusIcon from "../../assets/minusIcon.svg?react";
import PlusIcon from "../../assets/plusIcon.svg?react";

const Cards = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        height: show ? "auto" : "auto",
        backgroundColor: show ? "white" : "#FFEFE5",
      }}
      className=" flex p-[40px] gap-[30px] items-start transition-all justify-center self-stretch w-full rounded-[12px] border-2 vorder-grey  "
    >
      <div className=" flex flex-col gap-[24px] w-full self-stretch ">
        <p
          style={{
            lineHeight: "150%",
          }}
          className=" text-[22px] font-semibold font-outfit text-grey "
        >
          {title}
        </p>

        {show && (
          <div className=" min-w-full border-[2px] border-t-grey "></div>
        )}

        {show && (
          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-[20px] font-medium font-outfit text-[#333] "
          >
            {description}
          </p>
        )}
      </div>

      <div
        onClick={() => setShow((prev) => !prev)}
        className=" p-[8px] rounded-[6px] border-2 border-grey bg-container "
      >
        {show ? <MinusIcon /> : <PlusIcon />}
      </div>
    </div>
  );
};

export default Cards;
