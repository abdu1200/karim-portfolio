import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workFreelance, setworkFreelance] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleFreelance = () => {
    setworkFreelance(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setworkFreelance(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setworkFreelance(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setworkFreelance(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setworkFreelance(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <Container id="experience" className="py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle title="Where I have worked" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* Button setup */}
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleFreelance}
            className={`${
              workFreelance
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Freelance
          </li>
          {/* <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {/* Content */}
        {workFreelance && (
          <WorkCard
            jobTitle="Full Stack Developer"
            jobTag="@LinkedIn @My Personal Network"
            date="Jan 2023 - present"
            detailsOne="Worked on multiple freelance projects through LinkedIn and personal referrals, delivering high-quality web and mobile applications."
            detailsTwo="Collaborated closely with clients to understand requirements, design systems, and implement effective solutions using technologies such as Python (Django, Flask), JavaScript (React, Next.js), Flutter, Firebase, and more."
            detailsThree="Focused on creating user-friendly, responsive applications tailored to meet specific business needs."
          />
        )}
        {/* {workGoogle && (
          <WorkCard
            jobTitle="Web Developer"
            jobTag="@Google"
            date="Jan 2022 - Dec 2023"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )}
        {workApple && (
          <WorkCard
            jobTitle="MERN Stack Developer"
            jobTag="@Apple"
            date="Jan 2021 - Dec 2021"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )}
        {workSplash && (
          <WorkCard
            jobTitle="MERN Stack Developer"
            jobTag="@Splash"
            date="Jan 2021 - Dec 2021"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )}
        {workAmazon && (
          <WorkCard
            jobTitle="web Design"
            jobTag="@Amazon"
            date="Jan 2020 - Dec 2020"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )} */}
      </div>
    </Container>
  );
};

export default Experience;
