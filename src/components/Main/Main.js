import React from "react";
import { Routes,Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Navbar } from "../../components/Navbar/Navbar";
import "./main.css"    
import { Singnin } from "../../pages/Register/Singnin";
import { Signup } from "../../pages/Register/Singnup";
import { Futter } from "../Futter/Futter";
import { Confirm } from "../../pages/Confirm/Confirm";
import { Detail } from "../../pages/Detail/Detail";
import { Basket } from "../../pages/Basket/Basket";
import { Katalog } from "../../pages/Katalog/Katalog";
import { Config } from "../../Config/Config";
import { About } from "../../pages/About/About";
import { Myacount } from "../../pages/Register/Myacount";
import { All } from "../../pages/All/All";
import { Courier } from "../../pages/Courier/Courier";



export function Main(){


    return (
      <div className="main">
        <Navbar />
        {/* // barcha pageslar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/signin" element={<Singnin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myacount" element={<Myacount />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/view/product" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/courier" element={<Courier />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/all" element={<All />} />
        </Routes>
        <Futter />

        <Config />
      </div>
    );
}