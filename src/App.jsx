import "./App.css";
import Container from "./components/container/Container";
import NavBar from "./components/header/NavBar";
import TopBanner from "./components/header/TopBanner";
import HeroSection from "./components/hero/HeroSection";
import IconOne from "./assets/Icon_01.svg?react";
import IconTwo from "./assets/Icon_02.svg?react";
import IconThree from "./assets/Icon_03.svg?react";
import IconFour from "./assets/Icon_04.svg?react";
import IconFive from "./assets/Icon_05.svg?react";
import IconSix from "./assets/Icon_06.svg?react";
import Star from "./assets/start.svg?react";
import IconPfOne from "./assets/Icon_pf_01.svg?react";
import IconPfTwo from "./assets/Icon_pf_02.svg?react";
import IconPfThree from "./assets/Icon_pf_03.svg?react";
import Cards from "./components/container/Cards";

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
            <div className=" flex w-full gap-[50px] min-h-[462px] h-[462px] self-stretch  ">
              {avatarData1?.map(({ icon, id, title, description }) => {
                return (
                  <div className=" relative p-[50px] gap-[30px] border-2 border-grey shadow-containerCard rounded-[12px] flex flex-col items-center justify-start w-full  min-h-full   ">
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
            </div>
          }
          cards2={false}
        />

        <Container col={false}
          subText2="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
          Header="Frequently Asked Questions"
          subText={"Solutions For The Doubts"}
          cards={
            <div className=" flex flex-col w-full gap-[30px] min-h-[665px] h-[665px] self-stretch  ">
              {faqData1.map(({ title, description, id }) => {
                return <Cards key={id} title={title} description={description} /> ;
              })}
            </div>
          }
          cards2={ <div className=" flex flex-col w-full gap-[30px] min-h-[665px] h-[665px] self-stretch  ">
            {faqData2.map(({ title, description, id }) => {
              return <Cards key={id} title={title} description={description} /> ;
            })}
          </div>}
        />
      </section>
    </div>
  );
}

export default App;
