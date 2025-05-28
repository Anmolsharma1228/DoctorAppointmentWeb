import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientData } from "../Action/Action";
import Loader from "../Components/Loader";
import Header from "../Components/Header";

const Patient = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // patientList is an array (based on reducer setup)
  const patientList = useSelector((state) => state.patient);
  console.log(patientList);
  useEffect(() => {
    dispatch(getPatientData());
    const timer = setTimeout(()=>{
    setLoading(false);
    },2000)
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="flex flex-col text-center sm:text-start items-center gap-8 mt-16">
      <h1 className="text-2xl font-semibold text-center">Patient Details</h1>
    {loading ? (
      <Loader />
    ) : Array.isArray(patientList) && patientList.length > 0 ? (
      patientList.map((patient) => (
          <div className="shadow-2xl py-8 px-6 w-[600px] bg-white rounded-xl">
             <ul className="space-y-2 text-gray-800">
        <li><strong>First Name:</strong> {patient.FirstName}</li>  
        <li><strong>Last Name:</strong> {patient.LastName}</li>
        <li><strong>Email:</strong> {patient.Email}</li>
        <li><strong>Phone:</strong> {patient.Phone}</li>
        <li><strong>Address 1:</strong> {patient.Address1}</li>
        <li><strong>Address 2:</strong> {patient.Address2}</li>
        <li><strong>City:</strong> {patient.City}</li>
        <li><strong>State:</strong> {patient.State}</li>
        <li><strong>Zip:</strong> {patient.Zip}</li>
      </ul>
          </div>
      ))
    ) : (
      <p>No patients found.</p>
    )}
  </div>
    </div>
  );
};

export default Patient;
