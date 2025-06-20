import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import Header from "../Components/Header";
const Service = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-8 items-center justify-items-center mx-2 mt-20">
        {[
          {department: "Dental Checkup", image: img1},
          {department: "Dermalotogist", image: img2},
          {department: "Cardiologist", image: img3},
          {department: "Neruologist", image: img4},
          {department: "Pediatrican", image: img5},
          {department: "Lab Test", image: img6},
        ].map((services, index)=>(
          <div key={index} className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={services.image} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">{services.department}</p>
      </div>
        ))}
      
    </div>
    </div>

  );
};

export default Service;
