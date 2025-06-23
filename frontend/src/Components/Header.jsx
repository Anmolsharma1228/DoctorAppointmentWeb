import React, { useEffect, useState } from "react";
import { FaBars, FaCheck, FaRegUser } from "react-icons/fa";
import { useDispatch} from "react-redux";
import { logout } from "../Action/Action";
import { getPatientData } from "../Action/Action";
import { ImCross } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  useEffect(()=>{
dispatch(getPatientData())
  },[dispatch])

  const LogoutButton = () =>{
   dispatch(logout())
   navigate("/login")   
  }  

  return (
    <div className="">
      {/* Navbar */}
      <nav className="bg-[#7A1CAC] py-4 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-4 text-white font-semibold text-lg">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <ImCross /> : <FaBars />}
          </button>
          <span className="">Patient System</span>
        </div>
        <div className="space-x-8 text-lg font-semibold hidden md:flex">
          <NavLink
            to="/Bappointment"
            className={({ isActive }) => (isActive ? "text-white" : "text-gray-300")}
          >
            Book an Appointment
          </NavLink>
          <NavLink
            to="/Mappointment"
            className={({ isActive }) => (isActive ? "text-white" : "text-gray-300")}
          >
            My Appointment
          </NavLink>
          <NavLink
            to="/Service"
            className={({ isActive }) => (isActive ? "text-white" : "text-gray-300")}
          >
            Services
          </NavLink>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`bg-white shadow-lg w-[200px] fixed top-[60px] bottom-0 left-0 transform 
  ${toggle ? "translate-x-0" : "-translate-x-full"} 
  transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}>

        <div className="py-6 text-center">
          <img src={profile} alt="Profile" className="w-[80px] h-[80px] rounded-full mx-auto" />
          <p className="font-semibold mt-2">Lorem Ipsum</p>
        </div>
        <div className="md:hidden ml-4 text-center font-semibold flex flex-col my-2">
          <NavLink
            to="/Bappointment"
            className="py-2 font-semibold text-md cursor-pointer"
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="/Mappointment"
            className="py-2 font-semibold text-md cursor-pointer"
          >
            My Appointment
          </NavLink>
          <NavLink
            to="/Service"
            className="py-2 font-semibold text-md cursor-pointer"
          >
            Services
          </NavLink>
        </div>
        <div className="flex flex-col gap-3 mt-8 px-4">
          <Link to="/patient" className="flex items-center justify-center gap-2 rounded-r-full bg-[#7A1CAC] text-white py-2 font-semibold text-lg cursor-pointer">
            <FaCheck />
            Patient
          </Link>
          <button onClick={LogoutButton} className="flex items-center justify-center gap-2 text-gray-800 bg-white py-2 rounded-r-full font-semibold text-lg cursor-pointer">
            <FaRegUser />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
