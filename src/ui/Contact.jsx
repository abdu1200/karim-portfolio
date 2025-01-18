import React from "react";
import Container from "./Container";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="py-10 lg:pb-32 flex flex-col gap-4 items-center justify-center px-6 sm:px-10"
    >
      <p className="text-lg text-designColor font-semibold tracking-wide">
        06. What’s Next?
      </p>
      <h2 className="text-3xl sm:text-5xl font-semibold text-center">
        Get In Touch
      </h2>
      <p className="max-w-xl mx-auto text-center text-darkText text-sm sm:text-base">
        I’m currently open to{" "}
        <span className="text-designColor">remote job opportunities</span>. If
        you have a role that matches my skills or just want to connect, feel
        free to reach out. I’ll do my best to get back to you!
      </p>

      <div className=" flex items-center justify-center">
        <a href="mailto:abdukmom03@gmail.com">
          <button className="mt-5 w-28 sm:w-36 h-10 sm:h-12 rounded-md text-designColor text-xs sm:text-sm border border-designColor hover:bg-hoverColor duration-300">
            Email Me
          </button>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
