import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getappointmentdata } from '../Action/Action';
import Loader from "../Components/Loader";

const Mappointment = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  // ✅ useSelector directly gets the array now
  const getuploadData = useSelector((state) => state.getappointmentdata || []);

  useEffect(() => {
    dispatch(getappointmentdata());
    const timer = setTimeout(()=>{
    setLoading(false);
    },2000)
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">All Appointments</h2>

      {getuploadData.length === 0 ? (
      <Loader/>
      ) : (
        getuploadData.map((data, index) => (
          <div key={index} className="w-[400px] mx-auto mb-4 border p-4 rounded shadow">
            <p><strong>Date:</strong> {new Date(data.date).toLocaleDateString()}</p>
            <p><strong>Department:</strong> {data.department}</p>
            <p><strong>Comments:</strong> {data.comments}</p>
            {data.file && (
              <p>
                <strong>File:</strong>{' '}
                <a
                  href={`https://doctorappointmentweb.onrender.com/${data.file.replace(/\\/g, "/")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View File
                </a>
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Mappointment;
