import React from 'react'

const HeroSection = () => {
  return (
    <div className=" w-full h-[72.68518518518519vh] flex justify-center gap-[60px] items-center ">
    <div className=" relative bg-hero-primary w-full  h-full ">
      <img
        className=" absolute h-full w-auto object-cover "
        src="/src/assets/heroImage.png"
        alt=""
        srcset=""
      />
      <img
        className=" absolute h-[80%] left-[10%] top-[10%] w-auto object-cover "
        src="/src/assets/circleGroup.svg"
        alt=""
        srcset=""
      />

      {/* <div className=" absolute top-[-1.5%] left-[-1%] flex flex-col w-full  justify-between h-full items-start ">
        <div className=" relative flex w-[103%] h-auto justify-start items-start ">
          <span className=" absolute p-[10px] rounded-full border-grey border-2 bg-white "></span>
          <span className=" left-[24px] top-[10px] absolute w-[94%] border-t-[2px] border-grey "></span>
          <span className=" right-[1.5%]  absolute p-[10px] rounded-full border-grey border-2 bg-white "></span>
        </div>

        <div className=" relative flex w-[104%] h-auto justify-start items-start ">
          <span className=" absolute p-[10px] rounded-full border-grey border-2 bg-white "></span>
          <span className=" left-[24px] top-[10px] absolute w-[94%] border-t-[2px] border-grey "></span>
          <span className=" right-[1.5%]  absolute p-[10px] rounded-full border-grey border-2 bg-white "></span>
        </div>
      </div> */}

      {/* <div className=" rotate-90 absolute top-[-2%] right-[-1.5%] flex flex-col w-full  justify-between h-full items-start ">
        <div className=" relative flex w-[104%] h-auto justify-start items-start ">
          <span className=" left-[24px] top-[10px] absolute w-[94%] border-t-[2px] border-grey "></span>
        </div>

        <div className=" relative flex w-[104%] h-auto justify-start items-start ">
          <span className=" left-[24px] top-[10px] absolute w-[94%] border-t-[2px] border-grey "></span>
        </div>
      </div> */}
    </div>
    <div className=" min-h-[500px] w-full flex flex-col gap-[60px] items-start ">
      <div className=" flex flex-col items-start gap-[30px] ">
        <div className=" flex flex-col items-start ">
          <div className=" flex pb-[6px] gap-[10px] items-start "></div>
          <p
            style={{
              lineHeight: "130%",
            }}
            className=" relative text-grey text-[54px] flex flex-wrap  font-raleway font-extrabold "
          >
            Where Young Minds Blossom and
            <span className="    text-primary ">
              Dreams Take Flight.
            </span>
          </p>
        </div>

        <p
          style={{
            lineHeight: "150%",
          }}
          className=" font-outfit  text-[20px] font-medium text-[#333] "
        >
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a
          lifetime. Join us as we embark on an exciting educational
          journey together!
        </p>
      </div>

      <div className=" w-full py-[24px] px-[50px] flex items-start gap-[13px] rounded-[12px] border-2 border-grey bg-secondary-color shadow-card ">
        <div className=" flex flex-col items-start w-full ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-grey font-outfit text-[44px] font-extrabold "
          >
            +7000
          </p>

          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-grey font-outfit text-[18px] font-medium "
          >
            Students Passed Out{" "}
          </p>
        </div>
        <div className=" flex flex-col items-start w-full ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-grey font-outfit text-[44px] font-extrabold "
          >
            +37
          </p>

          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-grey font-outfit text-[18px] font-medium "
          >
Awards & Recognitions                </p>
        </div>
        <div className=" flex flex-col items-start w-full ">
          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-grey font-outfit text-[44px] font-extrabold "
          >
            +15
          </p>

          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-grey font-outfit text-[18px] font-medium "
          >
Experience Educators                </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
