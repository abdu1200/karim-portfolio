import { profileImg } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
            I am passionate about solving problems through coding. My journey
            into software development began with a fascination for how
            technology can address real-world challenges, and over the years,
            I’ve built my skills in creating practical software solutions.
          </p>
          <p>
            I earned my bachelor's degree in Computer Science from{" "}
            <span className="text-designColor"> Addis Ababa University</span>{" "}
            and am currently pursuing a{" "}
            <span className="text-designColor">master’s degree</span> in
            Software Engineering at the same institution. My research generally
            focuses on the{" "}
            <span className="text-designColor">
              impact of Gang-of-Four (GoF) design patterns on software quality
            </span>
            , which has significantly enhanced my ability to design systems with
            high-quality standards.
          </p>
          <p>
            From developing robust software to mastering system design
            principles, I’m driven by a desire to bridge theory and practice,
            ensuring my work not only solves problems but also meets the highest
            standards of quality and maintainability.
          </p>
          <a href="" target="blank">
            <span className="text-designColor inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Read my story
              <span className="absolute w-full h-[1px] bg-designColor left-0 bottom-0" />
            </span>
          </a>
          {/* <p>Here are a few technologies I have been working with recently:</p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group"
              >
                <FaCode className="text-designColor/80 group-hover:text-designColor duration-200" />{" "}
                {item?.title}
              </a>
            ))}
          </div> */}
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg}
                alt="profileImg"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Container>
  );
};

export default About;
