import React from "react";
import { Routes,Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Navbar } from "../../components/Navbar/Navbar";
import "./main.css"    
// import { Singnin } from "../../pages/Register/Singnin";
// import { Signup } from "../../pages/Register/Singnup";
import { Futter } from "../Futter/Futer";
import { Confirm } from "../../pages/Confirm/Confirm";
import { Detail } from "../../pages/Detail/Detail";
import { Basket } from "../../pages/Basket/Basket";



export function Main(){


    return (
      <div className="main">
        <Navbar />
        {/* // barcha pageslar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          {/* <Route path="/signin" element={<Singnin/>} />
          <Route path="signup" element={<Signup/>} />
           */}
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Basket" element={<Basket />} />
        </Routes>
        <Futter />
      </div>
    );
}