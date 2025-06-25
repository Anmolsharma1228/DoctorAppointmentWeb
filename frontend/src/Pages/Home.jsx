import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { patientdata } from "../Action/Action";
import { handleSuccess, handleError } from "../Components/utils";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patientData, setpatientData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    Zip: "",
  });

  const [error, seterror] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    Zip: "",
  });
  
  const habdleChange = (e) => {
    const { name, value } = e.target;

    if (name === "FirstName" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "First Name must be at least 4 characters long",
      }));
    } else if (name === "LastName" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "Last Name must be at least 4 characters long",
      }));
    } else if (name === "Phone" && value.trim().length < 10) {
      seterror((prev) => ({
        ...prev,
        [name]: "Phone number must be at least 10 digits",
      }));
    } else if (name === "Address1" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "Address1 must be at least 4 characters long",
      }));
    } else if (name === "Address2" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "Address2 must be at least 4 characters long",
      }));
    } else if (name === "City" && value.trim().length < 2) {
      seterror((prev) => ({
        ...prev,
        [name]: "City must be at least 2 characters long",
      }));
    } else if (name === "State" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "State must be at least 4 characters long",
      }));
    } else if (name === "Zip" && value.trim().length < 4) {
      seterror((prev) => ({
        ...prev,
        [name]: "Zip must be at least 4 characters long",
      }));
    } else {
      seterror((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    setpatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientData.FirstName || error.FirstName) {
      alert("Please enter a valid First Name");
      return;
    }
    if (!patientData.LastName || error.LastName) {
      alert("Please enter a valid Last Name");
      return;
    }
    if (!patientData.Phone || error.Phone) {
      alert("Please enter a valid Phone number");
      return;
    }
    if (!patientData.Address1 || error.Address1) {
      alert("Please enter a valid Address1");
    }
    if (!patientData.Address2 || error.Address2) {
      alert("Please enter a valid Address2");
      return;
    }
    if (!patientData.City || error.City) {
      alert("Please enter a valid City");
      return;
    }
    if (!patientData.State || error.State) {
      alert("Please enter a valid State");
      return;
    }
    if (!patientData.Zip || error.Zip) {
      alert("Please enter a valid Zip");
      return;
    }
    dispatch(patientdata(patientData))
      .then(() => {
        handleSuccess("Patient data added successfully");
        setTimeout(() => {
            navigate("/Patient");
          }, 1000);
      })
      .catch((err) => {
        console.error("Data added failed!:", err);
        handleError("Data added failed!");
      });
  };

  return (
   
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl w-[90%] max-w-[900px] mx-auto p-5 mt-24"
      >
        {/* Row 1 */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="firstName" className="mb-1 font-semibold">
              First Name
            </label>
            <input
              type="text"
              name="FirstName"
              value={patientData.FirstName}
              onChange={habdleChange}
              id="firstName"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="lastName" className="mb-1 font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name="LastName"
              value={patientData.LastName}
              onChange={habdleChange}
              id="lastName"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="phone" className="mb-1 font-semibold">
              Phone
            </label>
            <input
              type="text"
              name="Phone"
              value={patientData.Phone}
              onChange={habdleChange}
              id="phone"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="email" className="mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="Email"
              value={patientData.Email}
              onChange={habdleChange}
              id="email"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="address1" className="mb-1 font-semibold">
              Address Line 1
            </label>
            <input
              type="text"
              name="Address1"
              value={patientData.Address1}
              onChange={habdleChange}
              id="address1"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="address2" className="mb-1 font-semibold">
              Address Line 2
            </label>
            <input
              type="text"
              name="Address2"
              value={patientData.Address2}
              onChange={habdleChange}
              id="address2"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="city" className="mb-1 font-semibold">
              City
            </label>
            <input
              type="text"
              name="City"
              value={patientData.City}
              onChange={habdleChange}
              id="city"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="state" className="mb-1 font-semibold">
              State
            </label>
            <input
              type="text"
              name="State"
              value={patientData.State}
              onChange={habdleChange}
              id="state"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex flex-col w-full sm:w-[250px]">
            <label htmlFor="zip" className="mb-1 font-semibold">
              Zip
            </label>
            <input
              type="text"
              name="Zip"
              value={patientData.Zip}
              onChange={habdleChange}
              id="zip"
              className="border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
        <div className="text-center cursor-pointer">
          <button className="bg-[#7A1CAC] px-3 py-1 text-white font-semibold rounded-sm my-5 cursor-pointer ">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
