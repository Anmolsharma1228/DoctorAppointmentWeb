import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bappointment from "../Pages/Bappointment";
import Mappointment from "../Pages/Mappointment";
import Service from "../Pages/Service";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Header from "../Components/Header";
import Login from "../Pages/Login";
import Patient from "../Pages/Patient";
import About from "../Pages/About";
import Footer from "../Pages/Footer";
import Help from "../Pages/Help";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Bappointment" element={<Bappointment />} />
        <Route path="/Mappointment" element={<Mappointment />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Patient" element={<Patient/>}></Route>
        <Route path="/Help" element={<Help/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Index;
