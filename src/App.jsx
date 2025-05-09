import "./App.css";
import Container from "./components/container/Container";
import NavBar from "./components/header/NavBar";
import TopBanner from "./components/header/TopBanner";
import HeroSection from "./components/hero/HeroSection";
import IconOne from "../src/assets/Icon_01.svg?react";
import IconTwo from "../src/assets/Icon_02.svg?react";
import IconThree from "../src/assets/Icon_03.svg?react";
import IconFour from "../src/assets/Icon_04.svg?react";
import IconFive from "../src/assets/Icon_05.svg?react";
import IconSix from "../src/assets/Icon_06.svg?react";
import Star from "../src/assets/start.svg?react";
import IconPfOne from "../src/assets/Icon_pf_01.svg?react";
import IconPfTwo from "../src/assets/Icon_pf_02.svg?react";
import IconPfThree from "../src/assets/Icon_pf_03.svg?react";
import Cards from "./components/container/Cards";
import ArrowLeft from "../src/assets/arrowLeft.svg?react";
import FaceBookIcon from "../src/assets/facebook_icon.svg?react";
import TwitterIcon from "../src/assets/twitter_icon.svg?react";
import LinkinIcon from "../src/assets/linkin_icon.svg?react";
import Logo from "../src/assets/Logo.svg?react";
import LogoText from "../src/assets/LogoText.svg?react";
import MailIcon from "../src/assets/mail_icon.svg?react";
import PhoneIcon from "../src/assets/phone_icon.svg?react";
import NavigateIcon from "../src/assets/navigate_icon.svg?react";

function App() {
  const cardsData1 = [
    {
      icon: <IconOne />,
      title: "Holistic Learning Approach",
      description:
        "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
      id: 1,
    },
    {
      icon: <IconTwo />,
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
      id: 2,
    },
    {
      icon: <IconThree />,
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
      id: 3,
    },
  ];

  const cardsData2 = [
    {
      icon: <IconFour />,
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
      id: 1,
    },
    {
      icon: <IconFive />,
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
      id: 2,
    },
    {
      icon: <IconSix />,
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
      id: 3,
    },
  ];

  const avatarData1 = [
    {
      icon: <IconPfOne />,
      title: "Jennifer B",
      description:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
      id: 1,
    },
    {
      icon: <IconPfTwo />,
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
      id: 2,
    },
    {
      icon: <IconPfThree />,
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
      id: 3,
    },
  ];

  const faqData1 = [
    {
      title: "What are the school hours at Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 1,
    },
    {
      title: "Is there a uniform policy for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 2,
    },
    {
      title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 3,
    },

    {
      title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 4,
    },
  ];

  const faqData2 = [
    {
      title: "How do you handle food allergies and dietary restrictions?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 1,
    },
    {
      title: "What is the teacher-to-student ratio at Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 2,
    },
    {
      title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 3,
    },

    {
      title: "How do you handle discipline and behavior management?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
      id: 4,
    },
  ];

  const detail1 = [
    {
      title: "About Us",
      description:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
      id: 1,
    },
    {
      title: "Academics",
      description:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
      id: 2,
    },
  ];

  const detail2 = [
    {
      title: "Student Life",
      description:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
      id: 1,
    },
    {
      title: "Admissions",
      description:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
      id: 2,
    },
  ];

  return (
    <div className="  font-raleway bg-container w-full max-h-screen overflow-y-auto h-screen flex flex-col px-[51px] py-[18px] gap-[80px] ">
      <header className=" w-full h-auto gap-[14px] flex flex-col justify-start items-center ">
        <TopBanner />
        <NavBar />
      </header>

      <section className=" gap-[200px] px-[162px] w-full h-auto flex flex-col ">
        {/* Hero Section  */}
        <HeroSection />

        <Container
          subText2="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
          Header="Our Benefits"
          subText={"Children Deserve Bright Future"}
          cards={
            <div className=" flex w-full gap-[40px] min-h-[341px] h-[341px]  ">
              {cardsData1?.map(({ icon, id, title, description }) => {
                return (
                  <div className=" relative flex flex-col items-end w-full  min-h-full   ">
                    <div className=" left-[30px] top-[-35px] absolute bg-secondary min-w-[34px] min-h-[34px] p-[20px] rounded-[12px] border-2 border-grey ">
                      {icon}
                    </div>
                    <div className=" py-[80px] px-[50px]  min-h-[306px] h-[306px] flex flex-col items-start gap-[20px] border-2 border-grey bg-white shadow-containerCard rounded-[12px] ">
                      <p
                        style={{
                          lineHeight: "130%",
                        }}
                        className=" text-[#1a1a1a] font-raleway text-[28px] font-bold "
                      >
                        {title}
                      </p>
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" text-[#4c4c4d] font-outfit text-[20px] font-medium "
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          }
          cards2={
            <div className=" flex w-full gap-[40px] ">
              {cardsData2?.map(({ icon, id, title, description }) => {
                return (
                  <div className=" relative flex flex-col items-end w-full h-[341px]  ">
                    <div className=" left-[30px] top-[-35px] absolute bg-secondary min-w-[34px] min-h-[34px] p-[20px] rounded-[12px] border-2 border-grey ">
                      {icon}
                    </div>
                    <div className="  min-h-[306px] h-[306px] py-[80px] px-[50px] flex flex-col items-start gap-[20px] border-2 border-grey bg-white shadow-containerCard rounded-[12px] ">
                      <p
                        style={{
                          lineHeight: "130%",
                        }}
                        className=" text-[#1a1a1a] font-raleway text-[28px] font-bold "
                      >
                        {title}
                      </p>
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" text-[#4c4c4d] font-outfit text-[20px] font-medium "
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        />

        <Container
          subText2="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
          Header="Our Testimonials"
          subText={"Their Happy Words 🤗"}
          cards={
            <div className=" flex w-full gap-[50px] min-h-[462px] h-[462px] justify-center items-center self-stretch  ">
              <div className=" rounded-[8px] bg-[#fff] rotate-180 border-2 border-grey h-[58px] w-[58px] flex p-[14px] gap-[10px]  ">
                <ArrowLeft />
              </div>
              {avatarData1?.map(({ icon, id, title, description }) => {
                return (
                  <div className=" relative bg-[#fff] p-[50px] gap-[30px] border-2 border-grey shadow-containerCard rounded-[12px] flex flex-col items-center justify-start w-[425.33px]  min-h-full  h-full  ">
                    <div className=" flex flex-col gap-[12px] items-center self-stretch justify-center w-full ">
                      <div className=" flex p-[10px] rounded-full border border-[#333] bg-container w-[80px] h-[80px] ">
                        {icon}
                      </div>
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" text-[#333] text-center w-full font-outfit text-[24px] font-semibold "
                      >
                        {title}
                      </p>
                    </div>

                    <div className=" flex gap-[5px] h-[24px] ">
                      <Star />
                      <Star />

                      <Star />

                      <Star />

                      <Star />
                    </div>

                    <p
                      style={{
                        lineHeight: "150%",
                      }}
                      className=" text-[#333] text-center w-full font-outfit text-[20px] font-medium "
                    >
                      {description}
                    </p>
                  </div>
                );
              })}
              <div className=" bg-[#fff] rounded-[8px]  border-2 border-grey h-[58px] w-[58px] flex p-[14px] gap-[10px]  ">
                <ArrowLeft />
              </div>
            </div>
          }
          cards2={false}
        />

        <Container
          col={false}
          subText2="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
          Header="Frequently Asked Questions"
          subText={"Solutions For The Doubts"}
          cards={
            <div className=" flex flex-col w-full gap-[30px] min-h-[665px] h-[665px] self-stretch  ">
              {faqData1.map(({ title, description, id }) => {
                return (
                  <Cards key={id} title={title} description={description} />
                );
              })}
            </div>
          }
          cards2={
            <div className=" flex flex-col w-full gap-[30px] min-h-[665px] h-[665px] self-stretch  ">
              {faqData2.map(({ title, description, id }) => {
                return (
                  <Cards key={id} title={title} description={description} />
                );
              })}
            </div>
          }
        />

        <Container
          col={true}
          subText2="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
          Header="Navigate through our Pages"
          subText={"Explore More"}
          cards2={
            <div className=" flex gap-[50px] items-start self-stretch h-[588px]  ">
              {detail2.map(({ title, description, id }) => {
                return (
                  <div className=" bg-white rounded-[12px] border-2 border-grey shadow-containerCard flex flex-col gap-[80px] p-[80px] w-full h-full items-start ">
                    <div className=" flex w-full flex-col justify-center items-center gap-[50px] self-stretch ">
                      <div className=" flex flex-col gap-[30px] justify-center items-center ">
                        <p
                          style={{
                            lineHeight: "130%",
                          }}
                          className=" flex  text-center font-raleway text-grey text-[48px] font-bold "
                        >
                          {title}
                        </p>

                        <div className=" flex w-full h-[20px] gap-[10px] items-center self-stretch  ">
                          <div className=" flex gap-[-6px] min-w-[93px] items-center ">
                            <div className=" z-[99] min-w-[20px] min-h-[20px] bg-white rounded-full border-2 border-grey "></div>

                            <div className="  ml-[-3px] flex py-[6px] pr-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>

                          <div className=" rotate-180 flex gap-[-6px] min-w-[93px] items-center ">
                            <div className=" z-[99] min-w-[20px] min-h-[20px] bg-white rounded-full border-2 border-grey "></div>

                            <div className="  ml-[-3px] flex py-[6px] pr-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" flex  text-center font-outfit text-grey text-[20px] font-medium "
                      >
                        {description}
                      </p>
                    </div>
                    <div className=" flex gap-[10px] py-[18px] justify-center rounded-[10px] border-2 border-grey bg-secondary shadow-containerCard items-center self-stretch ">
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" flex  text-center font-outfit text-[#333] text-[20px] font-medium "
                      >
                        Learn More
                      </p>
                      <ArrowLeft />
                    </div>
                  </div>
                );
              })}
            </div>
          }
          cards={
            <div className=" flex gap-[50px] items-start self-stretch h-[588px]  ">
              {detail1.map(({ title, description, id }) => {
                return (
                  <div className=" bg-white rounded-[12px] border-2 border-grey shadow-containerCard flex flex-col gap-[80px] p-[80px] w-full h-full items-start ">
                    <div className=" flex w-full flex-col justify-center items-center gap-[50px] self-stretch ">
                      <div className=" flex flex-col gap-[30px] justify-center items-center ">
                        <p
                          style={{
                            lineHeight: "130%",
                          }}
                          className=" flex  text-center font-raleway text-grey text-[48px] font-bold "
                        >
                          {title}
                        </p>

                        <div className=" flex w-full h-[20px] gap-[10px] items-center self-stretch  ">
                          <div className=" flex gap-[-6px] min-w-[93px] items-center ">
                            <div className=" z-[99] min-w-[20px] min-h-[20px] bg-white rounded-full border-2 border-grey "></div>

                            <div className="  ml-[-3px] flex py-[6px] pr-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                          <div className=" flex   min-w-[93px] items-center ">
                            <div className=" flex py-[6px] px-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>

                          <div className=" rotate-180 flex gap-[-6px] min-w-[93px] items-center ">
                            <div className=" z-[99] min-w-[20px] min-h-[20px] bg-white rounded-full border-2 border-grey "></div>

                            <div className="  ml-[-3px] flex py-[6px] pr-[6px] gap-[10px] w-full items-center bg-hero-primary ">
                              <span className=" w-full h-[2px] bg-[#000] "></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" flex  text-center font-outfit text-grey text-[20px] font-medium "
                      >
                        {description}
                      </p>
                    </div>
                    <div className=" flex gap-[10px] py-[18px] justify-center rounded-[10px] border-2 border-grey bg-secondary shadow-containerCard items-center self-stretch ">
                      <p
                        style={{
                          lineHeight: "150%",
                        }}
                        className=" flex  text-center font-outfit text-[#333] text-[20px] font-medium "
                      >
                        Learn More
                      </p>
                      <ArrowLeft />
                    </div>
                  </div>
                );
              })}
            </div>
          }
          // cards2={
          //   <div className=" flex flex-col w-full gap-[30px] min-h-[665px] h-[665px] self-stretch  ">
          //     {detail1.map(({ title, description, id }) => {
          //       return (
          //         <Cards key={id} title={title} description={description} />
          //       );
          //     })}
          //   </div>
          // }
        />
      </section>

      <footer className="  justify-center px-[100px] gap-[50px] items-center flex flex-col w-full min-h-[711px] h-[711px] rounded-[12px] border-2 bg-white border-grey shadow-containerCard ">
        <div className=" flex items-start gap-[80px] justify-between  self-stretch w-full h-[348px] ">
          <div className=" h-full flex flex-col gap-[50px] w-[519px] items-start ">
            <div className=" flex flex-col items-start self-stretch gap-[20px] ">
              <div className=" w-[228.367px] h-[50px] flex gap-[8.308px] items-center justify-start  ">
                <Logo />
                <LogoText />
              </div>

              <p className=" line-150 w-[519px] text-[20px] font-outfit text-[#4c4c4d] font-medium ">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
            </div>
            <div className=" flex flex-col gap-[24px] self-stretch w-full ">
              <div className=" w-full flex gap-[10px] self-stretch items-start ">
                <div className=" flex w-[40px] h-[40px] rounded-[6px] p-[8px] border-2 border-grey ">
                  <MailIcon />
                </div>
                <p className=" line-150 text-[20px] font-outfit text-grey font-medium ">
                  hello@littlelearners.com{" "}
                </p>
              </div>

              <div className=" w-full flex gap-[10px] self-stretch items-start ">
                <div className=" flex w-[40px] h-[40px] rounded-[6px] p-[8px] border-2 border-grey ">
                  <PhoneIcon />
                </div>
                <p className=" line-150 text-[20px] font-outfit text-grey font-medium ">
                  +91 91813 23 2309{" "}
                </p>{" "}
              </div>

              <div className=" w-full flex gap-[10px] self-stretch items-start ">
                <div className=" flex w-[40px] h-[40px] rounded-[6px] p-[8px] border-2 border-grey ">
                  <NavigateIcon />
                </div>
                <p className=" line-150 text-[20px] font-outfit text-grey font-medium ">
                  Somewhere in the World{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          <div className=" h-[260px] flex gap-[30px] w-auto  ">
            <div className=" flex flex-col gap-[24px] w-[226px] h-full ">
              <p className=" line-150  font-semibold text-[20px] font-outfit text-grey ">
                Home
              </p>

              <div className=" flex flex-col gap-[16px] items-start ">
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  Features
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  Our Testimonials{" "}
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  FAQ{" "}
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-[24px] w-[226px] h-full ">
              <p className=" line-150  font-semibold text-[20px] font-outfit text-grey ">
                About Us
              </p>

              <div className=" flex flex-col gap-[16px] items-start ">
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  Our Mission
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  Our Vission{" "}
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  Awards and Recognitions
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  History
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                  Teachers
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-[24px] w-[226px] h-full ">
              <p className=" line-150  font-semibold text-[20px] font-outfit text-grey ">
              Academics
              </p>

              <div className=" flex flex-col gap-[16px] items-start ">
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                Special Features
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                Gallery
                </p>
               
              </div>
            </div>

            <div className=" flex flex-col gap-[24px] w-[226px] h-full ">
              <p className=" line-150  font-semibold text-[20px] font-outfit text-grey ">
              Contact Us
              </p>

              <div className=" flex flex-col gap-[16px] items-start ">
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                Information
                </p>
                <p className=" line-150  font-medium text-[20px] font-outfit text-[#333] ">
                Map & Direction
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center gap-[30px]  self-stretch w-full h-[173px] ">
          <div className=" h-[1px] w-full bg-grey border-t border-grey "></div>
          <div className=" flex justify-between items-center self-stretch w-full h-[56px] ">
            <div className=" h-auto flex gap-[16px] items-start ">
              <p
                style={{
                  lineHeight: "150%",
                }}
                className=" text-[#333] font-outfit text-[18px] font-medium "
              >
                Term of Service
              </p>
              <div className=" h-[27px] border border-grey "></div>

              <p
                style={{
                  lineHeight: "150%",
                }}
                className=" text-[#333] font-outfit text-[18px] font-medium "
              >
                Privacy Policy
              </p>
              <div className=" h-[27px] border border-grey "></div>
              <p
                style={{
                  lineHeight: "150%",
                }}
                className=" text-[#333] font-outfit text-[18px] font-medium "
              >
                Cookie Policy{" "}
              </p>
            </div>

            <div className=" flex gap-[14px] h-[56px] items-start ">
              <div className=" w-[56px] p-[16px] h-[56px] rounded-[8px] border-2  border-grey bg-secondary ">
                <FaceBookIcon />
              </div>
              <div className=" w-[56px] h-[56px] p-[16px]  rounded-[8px] border-2  border-grey bg-secondary ">
                <TwitterIcon />
              </div>
              <div className=" w-[56px] h-[56px] p-[16px]  rounded-[8px] border-2  border-grey bg-secondary ">
                <LinkinIcon />
              </div>
            </div>
          </div>

          <div className=" h-[1px] w-full bg-grey border-t border-grey "></div>

          <p
            style={{
              lineHeight: "150%",
            }}
            className=" text-[18px] font-outfit font-medium text-center w-full text-[#656567] "
          >
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
