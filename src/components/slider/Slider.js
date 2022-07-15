import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import "./slickCarousel/slick/slick-theme.css";
import "./slickCarousel/slick/slick.css";

// import icons
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import { useSelector } from "react-redux";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
function SampleNextArrow({ onClick }) {
  return (
    <div className="btn_Left btn_arrow" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow({ onClick }) {
  return (
    <div className="btn_Right btn_arrow" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}


const SliderScale = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [images, setImages] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 2000,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setSliderIndex(next),
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };
  useEffect(() => {
    axios({
      method:"get",
      url:"https://api.sanone.uz/most/viewed"
    }).then((res) => setImages(res.data)).catch((err) => console.error(err))
  }, [])
  // api

  return (
    <div className="slider_scale">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div id="sleder_rasm"
            key={index}
            className={
              index === sliderIndex ? "rasm_slider slide_active" : "rasm_slider"
            }
          >
            <img src={item.images[0]} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderScale;
