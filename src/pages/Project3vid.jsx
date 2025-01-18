import React from "react";
import { Link } from "react-router-dom";
import { chatVid } from "../assets";

const Project3vid = () => {
  return (
    <div className="min-h-screen bg-primaryColor text-lightText p-6 relative">
      {/* Video Section */}
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Back to Projects Button for Mobile */}
        <div className="absolute top-4 left-4 sm:hidden">
          <Link to="/#project" className="text-[#90d5ff] underline">
            Go Back to Projects
          </Link>
        </div>

        {/* Video */}
        <div className="video-item w-[300px] sm:w-1/2 px-4">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src={chatVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-2 text-center text-gray-300">Chat App Flow</p>
        </div>
      </div>

      {/* Back to Projects Button for Desktop */}
      <div className="absolute top-4 left-4 hidden sm:block">
        <Link to="/#project" className="text-[#90d5ff] hover:underline">
          Go Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default Project3vid;
