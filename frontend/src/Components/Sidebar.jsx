import React from "react";
import profile from "../assets/profile.jpg";
import { FaCheck, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white shadow-lg w-[200px] text-center h-screen">
      <div className="py-6">
        <img
          src={profile}
          alt="Profile"
          className="w-[80px] h-[80px] rounded-full mx-auto"
        />
        <p className="font-semibold mt-2">Lorem Ipsum</p>
      </div>

      <div className="flex flex-col gap-3 mt-8 px-4">
        <Link
          to="/Patient"
          className="flex items-center justify-center gap-2 rounded-r-full bg-[#7A1CAC] text-white py-2 font-semibold text-lg cursor-pointer"
        >
          <FaCheck />
          Patient
        </Link>
        <button className="flex items-center justify-center gap-2 text-gray-800 bg-white py-2 rounded-r-full font-semibold text-lg cursor-pointer">
          <FaRegUser />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
