import React from 'react';
import { FaFileUpload } from "react-icons/fa";

const Bappointment = () => {
  return (
    <div className="bg-white shadow-xl border rounded-md w-full max-w-[500px] mx-auto mt-10 p-6">
      <h1 className="text-center mb-6 text-2xl font-bold text-[#7A1CAC]">Book An Appointment</h1>
      
      <form className="space-y-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <label className="block font-semibold text-lg" htmlFor="appointment-date">Select Date</label>
          <input
            type="date"
            id="appointment-date"
            name="appointmentDate"
            className="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#7A1CAC]"
          />
        </div>

        {/* Department Selection */}
        <div className="space-y-2">
          <label className="block font-semibold text-lg" htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            className="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#7A1CAC]"
          >
            <option value="">Select a department</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Pediatrician">Pediatrician</option>
          </select>
        </div>

        {/* Comments and File Upload */}
        <div className="space-y-2">
          <label className="block font-semibold text-lg" htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            className="border w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#7A1CAC]"
            placeholder="Enter your comments here..."
          ></textarea>
          
          <div className="flex items-center gap-3 mt-3">
            <FaFileUpload className="text-[#7A1CAC] text-2xl" />
            <input
              type="file"
              name="attachment"
              className="border rounded-md py-1 px-2 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-[#7A1CAC] file:text-white hover:file:bg-[#5a1389]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#7A1CAC] hover:bg-[#5a1389] text-white font-semibold py-2 rounded-md mt-6"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Bappointment;
