import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Home from "../Pages/Home";

const MainHeader = () => {
  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div className="z-10 flex">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default MainHeader;
