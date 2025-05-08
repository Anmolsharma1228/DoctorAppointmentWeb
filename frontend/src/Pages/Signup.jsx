import React, { useState } from "react";
import { FaLaptopMedical } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../Action/Action";

const Signup = () => {
  const [formdata, setformdata] = useState({
    Name: "",
    Email: "",
    Contact_Number: "",
    Password: "",
  });

  const dispatch = useDispatch();
   const userdata = useSelector((state)=> state.data)

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(formdata));
  };

  return (
    <div className="flex items-center justify-center mt-14 text-center">
      <div className=" w-[350px] sm:w-[400px] shadow-xl mx-3 sm:mx-0">
        <div className="rounded-t-xl flex items-center justify-center bg-[#7A1CAC] text-white py-3">
          <FaLaptopMedical className="text-6xl" />
          <h1 className="text-center font-semibold text-2xl">Patient System</h1>
        </div>
        <div className="">
          <h1 className="py-4 font-semibold text-lg">Singup to your account</h1>
          <form onSubmit={handleSubmit} className="py-3 rounded-b-xl">
            <input
              type="text"
              name="Name"
              value={formdata.Name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            <input
              type="email"
              name="Email"
              value={formdata.Email}
              onChange={handleChange}
              placeholder="Enter your email..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            <input
              type="tel"
              name="Contact_Number"
              value={formdata.Contact_Number}
              onChange={handleChange}
              placeholder="Enter your number..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            <input
              type="text"
              name="Password"
              value={formdata.Password}
              onChange={handleChange}
              placeholder="Enter you password..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />

            <div className="my-4 text-white font-semibold text-lg">
              <button
                type="submit"
                className="cursor-pointer bg-[#7A1CAC] px-5 py-1 rounded-sm"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
