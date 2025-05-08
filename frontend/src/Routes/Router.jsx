import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bappointment from "../Pages/Bappointment";
import Mappointment from "../Pages/Mappointment";
import Service from "../Pages/Service";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Header from "../Components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/Bappointment" element={<Bappointment />} />
        <Route path="/Mappointment" element={<Mappointment />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
