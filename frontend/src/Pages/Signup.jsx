import React, { useState } from "react";
import { FaLaptopMedical } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addData } from "../Action/Action";
import { useNavigate, Link } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import { handleError, handleSuccess } from "../Components/utils";

const Signup = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    contact_number: "",
    password: "",
  });

  const [error, seterror] = useState({
    name: "",
    email: "",
    contact_number: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation logic
    if (name === "name" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "Name must be at least 4 characters long",
      }));
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      seterror((prev) => ({
        ...prev,
        [name]: "Email is not valid",
      }));
    } else if (name === "contact_number" && value.trim().length < 10) {
      seterror((prev) => ({
        ...prev,
        [name]: "Contact number must be at least 10 digits",
      }));
    } else if (name === "password" && value.trim().length < 6) {
      seterror((prev) => ({
        ...prev,
        [name]: "Password must be at least 6 characters long",
      }));
    } else {
      seterror((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setformdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formdata.name || error.name) {
    alert("Please enter a valid name");
    return;
  }
  if (!formdata.email || error.email) {
    alert("Please enter a valid email");
    return;
  }
  if (!formdata.contact_number || error.contact_number) {
    alert("Please enter a valid contact number");
    return;
  }
  if (!formdata.password || error.password) {
    alert("Please enter a valid password");
    return;
  }

  dispatch(addData(formdata))
    .then(() => {
      handleSuccess("Signup successful");
      setTimeout(() => {
        navigate("/Login");
      }, 1000);
    })
    .catch((err) => {
      console.error("Signup failed:", err);
      handleError("Signup failed");
    });
};


  return (
    <div className="flex items-center justify-center mt-20 text-center">
      <div className="w-[350px] sm:w-[400px] shadow-xl mx-3 sm:mx-0">
        <div className="rounded-t-xl flex items-center justify-center bg-[#7A1CAC] text-white py-3">
          <FaLaptopMedical className="text-6xl" />
          <h1 className="text-center font-semibold text-2xl">Patient System</h1>
        </div>
        <div className="">
          <h1 className="py-4 font-semibold text-lg">Signup to your account</h1>
          <form onSubmit={handleSubmit} className="py-3 rounded-b-xl">
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter your name..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter your email..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}

            <input
              type="tel"
              name="contact_number"
              value={formdata.contact_number}
              onChange={handleChange}
              placeholder="Enter your number..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            {error.contact_number && (
              <p className="text-red-500 text-sm">{error.contact_number}</p>
            )}

            <input
              type="text"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter your password..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}

            <div className="my-4 text-white font-semibold text-lg">
              <button
                type="submit"
                className="cursor-pointer bg-[#7A1CAC] px-5 py-1 rounded-sm"
              >
                Signup
              </button>
            </div>
            <p className="text-blue-500">
              <Link to="/Login">Already have an account?</Link>
            </p>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
