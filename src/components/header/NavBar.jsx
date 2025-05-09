import React from "react";
import Logo from "/src/assets/Logo.svg?react";
import LogoText from "/src/assets/LogoText.svg?react";

const NavBar = () => {
  return (
    <div className="  w-full  flex justify-between items-center   rounded-[12px] border-2 border-grey bg-white ">
      <div className=" bg-primary  w-[230.69px] rounded-l-[10px] min-h-full py-[20px] px-[24px]  flex justify-center items-center gap-[10px] border-r-2 border-grey ">
        <div className=" w-full h-full flex gap-[6.647px] items-center justify-center  ">
          <Logo />
          <LogoText />
        </div>
      </div>
      <div className=" text-[20px] font-medium font-outfit flex self-stretch items-center ">
        <div className=" cursor-pointer justify-center items-center text-center flex py-[20px] px-[34px] gap-[10px] self-stretch border-grey  border-l-2 hover:bg-secondary ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className="  "
          >
            Home
          </p>
        </div>
        <div className=" cursor-pointer justify-center items-center text-center flex py-[20px] px-[34px] gap-[10px] self-stretch border-grey  border-l-2 hover:bg-secondary ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className="  "
          >
            About Us
          </p>
        </div>
        <div className=" cursor-pointer justify-center items-center text-center flex py-[20px] px-[34px] gap-[10px] self-stretch border-grey  border-l-2 hover:bg-secondary ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className="  "
          >
            Academics
          </p>
        </div>
        <div className=" cursor-pointer justify-center items-center text-center flex py-[20px] px-[34px] gap-[10px] self-stretch border-grey  border-l-2 hover:bg-secondary ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className="  "
          >
            Admission
          </p>
        </div>
        <div className=" cursor-pointer justify-center items-center text-center flex py-[20px] px-[34px] gap-[10px] self-stretch border-grey  border-l-2 hover:bg-secondary ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className="  "
          >
            Student Life
          </p>
        </div>
        <div className=" rounded-r-[10px] cursor-pointer justify-center items-center text-center flex py-[20px] px-[34px] gap-[10px] self-stretch border-grey  border-l-2 bg-primary ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className="  "
          >
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
