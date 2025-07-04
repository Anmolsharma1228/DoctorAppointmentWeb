import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";

const Bappointment = lazy(() => import("../Pages/Bappointment"));
const Mappointment = lazy(() => import("../Pages/Mappointment"));
const Service = lazy(() => import("../Pages/Service"));
const Signup = lazy(() => import("../Pages/Signup"));
const Home = lazy(() => import("../Pages/Home"));
const Header = lazy(() => import("../Components/Header"));
const Login = lazy(() => import("../Pages/Login"));
const Patient = lazy(() => import("../Pages/Patient"));
const About = lazy(() => import("../Pages/About"));
const Footer = lazy(() => import("../Components/Footer"));
const Help = lazy(() => import("../Pages/Help"));

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/" || location.pathname === "/Login";

  return (
    <Suspense fallback={<Loader/>}>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Bappointment" element={<Bappointment />} />
        <Route path="/Mappointment" element={<Mappointment />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </Suspense>
  );
};

const Index = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default Index;
