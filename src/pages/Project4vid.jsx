import React from "react";
import { Link } from "react-router-dom";
import { issueVid } from "../assets";

const Project4vid = () => {
  return (
    <div className="min-h-screen bg-primaryColor text-lightText p-6 relative">
      {/* Video Section */}
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Mobile version of the "Go Back to Projects" button */}
        <div className="absolute top-4 left-4 sm:hidden">
          <Link to="/#project" className="text-[#90d5ff] underline">
            Go Back to Projects
          </Link>
        </div>
        {/* Video */}
        <div className="video-item w-[400px] sm:w-1/2 px-4">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src={issueVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-2 text-center text-gray-300">The App in Action</p>
        </div>
      </div>

      {/* Desktop version of the "Go Back to Projects" button */}
      <div className="absolute top-4 left-4 hidden sm:block">
        <Link
          to="/#project"
          className="text-[#90d5ff] hover:underline cursor-pointer"
        >
          Go Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default Project4vid;
