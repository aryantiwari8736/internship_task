import React from "react";
import Accordian from "../components/Accordian";
const data = [
  {
    text: "Do you offer freelancers?",
    ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    text: "What’s the guarantee that I will be satisfied with the hired talent?",
    ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    text: "Can I hire multiple talents at once?",
    ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    text: "Why should I not go to an agency directly?",
    ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
  {
    text: "Who can help me pick a right skillset and duration for me?",
    ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  },
];
const Home = () => {
  return (
    <div className="">
      <div className="my-14 font-poppins  md:leading-[65px]">
        <div className="text-light_green  md:text-[36px]  text-[30px] font-cover text-center">
          Success stories
        </div>
        <div className="md:text-[56px] text-[35px]  mx-2 text-center font-medium  ">
          Every success journey{" "}
        </div>
        <div className="md:text-[56px]  text-[35px] text-center font-medium ">
          we’ve encountered.
        </div>
      </div>

      <div className="flex justify-evenly my-[100px] flex-wrap ">
        <div className="mx-3">
          <img src="Mask group.png" alt="home_img" className="max-w-[100%] " />
        </div>
        <div className="flex  flex-col justify-around gap-4 items-center lg:items-start">
          <div className=" max-w-[398px] text-[30px] md:text-[40px] font-semibold font-manrope text-center lg:text-left ">
            Enhance fortune 50 company’s insights teams research capabilities
          </div>
          <img src="Frame2.png" alt="home_img" />
          <button className="hover:bg-black_hover_color hover:text-white w-[245px] h-[88px] border px-3 py-2 rounded-full  bg-bg_black text-white">
            Explore More -
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-around rounded-3xl mx-4 py-4 bg-light_grey ">
        <div>
          <div className="font-cover text-[32px] text-dark_grey mx-2">
            What's on your mind
          </div>
          <div className="text-[55px] font-semibold font-manrope mx-2">
            Ask Questions
          </div>
          <img className="mt-6" src="Union.png" alt="home_img" />
        </div>
        <div className="max-w-[581px] mx-5 ">
          {data.map((e) => (
            <Accordian text={e.text} ans={e.ans} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
