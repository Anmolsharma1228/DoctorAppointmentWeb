import React, { useState } from "react";
import { FaLaptopMedical } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addData } from "../Action/Action";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Components/utils";
import { handleGoogleLogin } from "../Components/firbase";

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
    google: "",
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
    <div className="flex items-center justify-center mt-10 text-center">
      <div className="w-[350px] sm:w-[400px] shadow-xl mx-3 sm:mx-0">
        <div className="rounded-t-xl flex items-center justify-center bg-[#7A1CAC] text-white py-3 gap-2">
          <FaLaptopMedical className="text-5xl" />
          <h1 className="font-semibold text-2xl">Patient System</h1>
        </div>
        <div>
          <h1 className="py-4 font-semibold text-lg">Signup to your account</h1>
          <form
            onSubmit={handleSubmit}
            className="py-3 px-4 rounded-b-xl flex flex-col"
          >
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
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              placeholder="Enter your password..."
              className="my-2 px-5 py-1 border border-black rounded-sm"
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}

            <button
              type="submit"
              className="my-4 bg-[#7A1CAC] text-white font-semibold text-lg px-5 py-1 rounded-sm"
            >
              Signup
            </button>

            <p>
              <span>
                Already have an account?
                <Link to="/Login" className="text-blue-500">Login?</Link>
              </span>
            </p>

            <hr className="my-4" />
            <button
              type="button"
              onClick={() => handleGoogleLogin(seterror, navigate)}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-sm"
            >
              Signup with Google
            </button>
            {error.google && (
              <p className="text-red-500 text-sm">{error.google}</p>
            )}
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
