import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./slider_footer.css";

function SampleNextArrow({ onClick }) {
  return (
    <div className="btn_arrow footer_btn1 " onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow({ onClick }) {
  return (
    <div className="btn_arrow footer_btn2" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

export default function Slider_img() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const products = useSelector((state) => state.reProducts);
  return (
    <div className="slider_img">
      <Slider {...settings}>
        {products.map((item) => (
          <div>
            <div className="slider_boxer">
              <img src={item.images[0]} alt="" />
            </div>
            <div>
              <h1> {item.name} </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
