import React from "react";

const HeroSection = () => {
  return (
    <div className=" w-full h-[72.68518518518519vh] flex justify-center gap-[60px] items-center ">
      <div className=" relative bg-hero-primary w-full   h-full ">
        <img
          className=" absolute h-full   w-auto object-cover "
          src="https://github.com/lizzy-km/little-learner/blob/main_dev/src/assets/heroImage.png?raw=true"
          alt=""
          srcset=""
        />
        <img
          className=" absolute h-[90%]  w-auto  left-[10%] top-[5%] object-cover "
          src="https://raw.githubusercontent.com/lizzy-km/little-learner/d11e5cb6f2572ab4222877732936314ee8af2a40/src/assets/circleGroup.svg"
          alt=""
          srcset=""
        />

        <div className=" z-[999] absolute  flex flex-col top-[-0.5%] left-[-0.5%] w-[101%] h-[101%]   justify-between  items-start ">
          <div className=" w-full h-full flex justify-between items-start ">
            <div className=" flex flex-col h-full justify-between items-center w-[16px] bg-hero-primary  ">
              <div className=" w-[2px] border h-full border-grey "></div>
            </div>

            <div className=" flex flex-col h-[100%] justify-between items-center w-full   ">
              <div className=" flex flex-col h-[16px] justify-center items-center w-full bg-hero-primary  ">
                <div className=" w-[100%] border h-[2px] border-grey "></div>
              </div>
              <div className=" flex flex-col h-[16px] justify-center items-center w-full bg-hero-primary  ">
                <div className=" w-[100%] border h-[2px] border-grey "></div>
              </div>
            </div>

            <div className=" flex flex-col h-full justify-between items-center w-[16px] bg-hero-primary  ">
              <div className=" w-[2px] border h-full border-grey "></div>
            </div>
          </div>
        </div>

        <div className=" z-[999] absolute  flex flex-col top-[-1%] left-[-1%] w-[102%] h-[102%]   justify-between  items-start ">
          <div className=" w-full h-[20px] flex justify-between items-start ">
            <div className=" flex flex-col h-[20px] justify-between items-center w-[20px] rounded-full border-2 border-grey bg-[#fff]  "></div>

            <div className=" flex flex-col h-[20px] justify-between items-center w-[20px] rounded-full border-2 border-grey bg-[#fff]  "></div>
          </div>
          <div className=" w-full h-[20px] flex justify-between items-start ">
            <div className=" flex flex-col h-[20px] justify-between items-center w-[20px] rounded-full border-2 border-grey bg-[#fff]  "></div>

            <div className=" flex flex-col h-[20px] justify-between items-center w-[20px] rounded-full border-2 border-grey bg-[#fff]  "></div>
          </div>
        </div>
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
              <span className="    text-primary ">Dreams Take Flight.</span>
            </p>
          </div>

          <p
            style={{
              lineHeight: "150%",
            }}
            className=" font-outfit  text-[20px] font-medium text-[#333] "
          >
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
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
              Awards & Recognitions{" "}
            </p>
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
              Experience Educators{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
