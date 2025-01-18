import React, { useEffect } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { ecommerceImg, chatImg, issueImg, mobImg } from "../assets";
import ProjectsLInks from "./ProjectsLInks";
import { Link } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    //this is for when Project4vid.jsx 'go back to home' gets clicked

    // Check if the URL contains the hash
    if (window.location.hash === "#project") {
      // Scroll to the element with id="project"
      const element = document.getElementById("project");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // Remove the hash from the URL to prevent it from staying in the URL after refresh
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }, []);

  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Projects I have Built" titleNo="05" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center space-x-0 lg:space-x-3">
          {/* Image */}
          <Link
            to="/project1vid"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={ecommerceImg}
              alt="eCommerce Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </Link>

          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-center lg:items-end text-center lg:text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">FanKit (Ecommerce Store)</h3>
            </div>
            <p
              className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md text-left lg:text-left"
              dir="ltr"
            >
              FanKit is an eCommerce store that sells football kits. Customers
              can explore and <span className="text-designColor">purchase</span>{" "}
              a variety of kits securely using{" "}
              <span className="text-designColor">Stripe</span>. The platform
              also features a{" "}
              <span className="text-designColor">subscription</span> service
              that provides exclusive discounts on products, making it more
              rewarding for loyal customers.
            </p>

            <ul className="text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5 justify-center lg:justify-end text-darkText">
              <li>React</li>
              <li>Nextjs</li>
              <li>Django</li>
              <li>Postgresql</li>
              <li>Stripe</li>
              <li>Redis</li>
              <li>Cloudinary</li>
              <li>Docker</li>
              <li>Render</li>
            </ul>
            <ProjectsLInks link="https://next-frontend-ohqg.onrender.com/" />
          </div>
        </div>
        {/* Project Two */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-12 justify-center items-center">
          {/* Image */}
          <Link
            to="/project2vid"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
          >
            <img
              src={mobImg}
              alt="chat app"
              className="w-64 h-80 object-contain"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </Link>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-center lg:items-start text-center lg:text-left z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">EtFitness (Mobile App)</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md text-left">
              EtFitness is an innovative fitness app thoughtfully designed to
              meet the needs of{" "}
              <span className="text-designColor">Ethiopian users</span>,
              catering to both{" "}
              <span className="text-designColor">normal users</span> and{" "}
              <span className="text-designColor">fitness professionals</span>.
              It features an extensive collection of{" "}
              <span className="text-designColor">home and gym workouts</span>,
              personalized{" "}
              <span className="text-designColor">
                workout plans and diet plans
              </span>{" "}
              with detailed nutrient information that align with Ethiopian
              lifestyles and dietary preferences. <br /> <br /> Users can enjoy
              seamless <span className="text-designColor">real-time chats</span>{" "}
              with fitness pros for guidance and motivation, while professionals
              can share expertise through engaging{" "}
              <span className="text-designColor">blogs</span> on health and
              fitness. The app also includes an{" "}
              <span className="text-designColor">AI-powered chatbot</span>,
              allowing users to ask fitness-related questions and receive
              instant, accurate advice.
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5 justify-center lg:justify-start text-darkText">
              <li>Flutter</li>
              <li>Firebase</li>
            </ul>
            <ProjectsLInks link="" />
          </div>
        </div>

        {/* Project Three */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center space-x-0 lg:space-x-3">
          {/* Image */}
          <Link
            to="/project3vid"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={chatImg}
              alt="chat app"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </Link>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-center lg:items-end text-center lg:text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                FlowChat (Real Time Chat App)
              </h3>
            </div>
            <p
              className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md text-left lg:text-left"
              dir="ltr"
            >
              FlowChat is a real-time chat application that enables users to
              communicate instantly with
              <span className="text-designColor"> no delays</span>, page
              refreshes or missed messages. It delivers a seamless and pure
              instant connection experience, complete with
              <span className="text-designColor"> notifications</span>, powered
              by
              <span className="text-designColor"> WebSockets</span>.
            </p>

            <ul className="text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5 justify-center lg:justify-end text-darkText">
              <li>React</li>
              <li>Flask</li>
              <li>Flask Socket-Io</li>
              <li>Notifications</li>
              <li>Docker</li>
              <li>Render</li>
            </ul>
            <ProjectsLInks link="" />
          </div>
        </div>
        {/* Project Four */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-12 justify-center items-center">
          {/* Image */}
          <Link
            to="/Project4vid"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={issueImg}
              alt="eCommerce Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </Link>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-center lg:items-start text-center lg:text-left z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                IssueBoard (Task Tracker App)
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md text-left">
              IssueBoard is a task tracker application where users can sign up
              to create and manage their tasks. It’s perfect for organizing {""}
              <span className="text-designColor">day-to-day activities</span>,
              <span className="text-designColor"> professional workflows</span>,
              and personal projects, ensuring productivity and efficiency.
            </p>

            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Prisma</li>
              <li>Docker</li>
              <li>Vercel</li>
            </ul>
            <ProjectsLInks link="" />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="mt-5 w-28 sm:w-36 h-10 sm:h-12 rounded-md text-designColor text-xs sm:text-sm border border-designColor hover:bg-hoverColor duration-300">
          Show More
        </button>
      </div>
    </Container>
  );
};

export default Project;
