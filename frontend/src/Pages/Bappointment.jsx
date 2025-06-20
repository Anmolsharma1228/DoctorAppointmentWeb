import React, { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import Header from "../Components/Header";
import { useSelector, useDispatch } from "react-redux";
import { appointment } from "../Action/Action";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../Components/utils";

const Bappointment = () => {
  const dispatch = useDispatch();
  const appointmentData = useSelector((state) => state.appointmentData);

  const [Appointment, setAppointment] = useState({
    appointmentDate: "",
    department: "",
    comments: "",
    attachment: "",
  });

  const [error, seterror] = useState({
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "comments" && value.trim().length < 6) {
      seterror((prev) => ({
        ...prev,
        [name]: "Comments must be at least 6 characters long",
      }));
    } else {
      seterror((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setAppointment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      handleError("Attachment size exceeds 2MB limit");
      return;
    }

    setAppointment((prev) => ({
      ...prev,
      attachment: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Appointment.comments || error.comments) {
      handleError("Please fill in all required fields correctly");
      return;
    }

    const formData = new FormData();
    formData.append("date", Appointment.appointmentDate);
    formData.append("department", Appointment.department);
    formData.append("comments", Appointment.comments);
    if (Appointment.attachment) {
      formData.append("file", Appointment.attachment);
    }

    dispatch(appointment(formData))
      .then(() => {
        handleSuccess("Appointment booked successfully");
      })
      .catch((error) => {
        handleError("Failed to book appointment");
        console.error("Error booking appointment:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-start px-4 md:px-0 mt-18 mb-14">
        <div className="bg-white shadow-xl border rounded-md w-full max-w-md p-6 md:p-8">
          <h1 className="text-center mb-6 text-2xl font-bold text-[#7A1CAC]">
            Book An Appointment
          </h1>

          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
            className="space-y-2"
          >
            <div className="space-y-2">
              <label
                className="block font-semibold text-lg"
                htmlFor="appointment-date"
              >
                Select Date
              </label>
              <input
                type="date"
                id="appointment-date"
                name="appointmentDate"
                value={Appointment.appointmentDate}
                onChange={handleChange}
                className="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#7A1CAC]"
              />
            </div>

            <div className="space-y-2">
              <label
                className="block font-semibold text-lg"
                htmlFor="department"
              >
                Department
              </label>
              <select
                id="department"
                name="department"
                value={Appointment.department}
                onChange={handleChange}
                className="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#7A1CAC]"
              >
                <option value="">Select a department</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Pediatrician">Pediatrician</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-lg" htmlFor="comments">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={Appointment.comments}
                onChange={handleChange}
                rows="4"
                className="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#7A1CAC]"
                placeholder="Enter your comments here..."
              ></textarea>
              {error.comments && (
                <p className="text-red-600 text-sm">{error.comments}</p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-3">
                <FaFileUpload className="text-[#7A1CAC] text-2xl" />
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="w-full sm:w-auto border rounded-md py-1 px-2 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-[#7A1CAC] file:text-white hover:file:bg-[#5a1389]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7A1CAC] hover:bg-[#5a1389] text-white font-semibold py-2 rounded-md mt-6"
            >
              Book Appointment
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Bappointment;
