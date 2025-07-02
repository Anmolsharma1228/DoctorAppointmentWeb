import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Action/Action";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Components/utils";

// ✅ Import Google login function
import { handleGoogleLogin } from "../Components/firbase"; 

const Login = () => {
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [error, seterror] = useState({ email: "", password: "", google: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      seterror((prev) => ({
        ...prev,
        [name]: "Invalid email",
      }));
    } else if (name === "password" && value.trim().length < 6) {
      seterror((prev) => ({
        ...prev,
        [name]: "Password must be at least 6 characters",
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

    if (!formdata.email || error.email) {
      alert("Please enter a valid email");
      return;
    }

    if (!formdata.password || error.password) {
      alert("Please enter a valid password");
      return;
    }

    dispatch(login(formdata))
      .then(() => {
        handleSuccess("Login successful");
        setTimeout(() => {
          navigate("/Home");
        }, 1000);
      })
      .catch((err) => {
        console.error("Login failed:", err);
        handleError("Invalid email or password");
      });
  };

  return (
    <div className="flex items-center justify-center mt-14 text-center">
      <div className="w-[350px] sm:w-[400px] shadow-xl mx-3 sm:mx-0">
        <h1 className="text-2xl font-semibold my-4">Login to your account</h1>
        
        <form onSubmit={handleSubmit} className="py-3 px-4 flex flex-col">
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            placeholder="Enter your email..."
            className="my-2 px-5 py-1 border border-black rounded-sm"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

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
            Login
          </button>

          <p className="text-blue-500">
            <Link to="/">Don't have an account?</Link>
          </p>

          <hr className="my-4" />

          <button
            type="button"
            onClick={() => handleGoogleLogin(seterror, navigate)}
            className="bg-blue-500 text-white px-4 py-2 rounded-sm"
          >
            Login with Google
          </button>

          {error.google && <p className="text-red-500 text-sm">{error.google}</p>}
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
