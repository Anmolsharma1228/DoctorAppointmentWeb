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
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img1} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">CT SCAN | X-RAY</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img2} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Dental Checkup</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img3} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Dermalotogist</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img4} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Cardiologist</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img5} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Neruologist</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img6} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Pediatrican</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img6} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Ayurveda Treatment</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img6} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Lab Test</p>
      </div>
      <div className="rounded-md shadow-lg text-center flex flex-col items-center w-[150px] md:w-[300px] hover:scale-105 duration-400">
        <img src={img6} alt="" className="rounded-t-md" />
        <p className="py-1 sm:py-2 font-semibold md:text-xl">Gynae Health</p>
      </div>
    </div>
    </div>

  );
};

export default Service;
