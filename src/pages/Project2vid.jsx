import React from "react";
import { Link } from "react-router-dom";
import { mob1Vid, mob2Vid } from "../assets";

const Project2vid = () => {
  return (
    <div className="min-h-screen bg-primaryColor text-lightText p-6 relative">
      {/* Back to Projects Button for Mobile */}
      <div className="block sm:hidden mb-4">
        <Link to="/#project" className="text-[#90d5ff] underline">
          Go Back to Projects
        </Link>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Video 1 */}
        <div className="video-item w-full sm:w-1/2 px-4 flex flex-col items-center">
          <video
            controls
            className="w-[180px] sm:w-[250px] h-[360px] sm:h-[500px] rounded-lg shadow-lg object-cover"
          >
            <source src={mob1Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-2 text-center text-gray-300">Normal User Flow</p>
        </div>

        {/* Video 2 */}
        <div className="video-item w-full sm:w-1/2 px-4 flex flex-col items-center">
          <video
            controls
            className="w-[180px] sm:w-[250px] h-[360px] sm:h-[500px] rounded-lg shadow-lg object-cover"
          >
            <source src={mob2Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="mt-2 text-center text-gray-300">Chats and Blogs Flow</p>
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

export default Project2vid;
