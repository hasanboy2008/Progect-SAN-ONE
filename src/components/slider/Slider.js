import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import "./slickCarousel/slick/slick-theme.css"
import "./slickCarousel/slick/slick.css";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { useSelector } from "react-redux";
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="btn_Left btn_arrow"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="btn_Right btn_arrow"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

const SliderScale = () => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 1000,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setSliderIndex(next),
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ]
  };
  const images = useSelector((state) => state.reProducts);
  return (
    <div className="slider_scale">
      <Slider {...settings}>
        {
          images.map((item, index) => (
            <figure key={index}
              className={index === sliderIndex ? 
              "rasm_slider slide_active" : "rasm_slider"} 
          >
              <img src={item.images[0]} alt="" />
            </figure>
          ))
        }
      </Slider>
    </div>
  )
}
export default SliderScale;