import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./double_slider.css";

// import required modules
import { Grid, Pagination } from "swiper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function App() {
  const products = useSelector((state) => state.reProducts);
  const newProducts = [...products, ...products];
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        navigation={true}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row"
        }}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {
          newProducts.map(item => (
            <SwiperSlide>
              <div className="new_Produc_1">
                <figure>
                  <img src={item.images[0]} alt="" />
                </figure>
                <p>{item.name}</p>
                <hr />
                <div className="price_share">
                  <div className="discount_pricw">
                    <p>{item.price}</p>
                    <span>{item.discount}</span>
                  </div>
                  <img src={item.share} alt="" />
                  kdsb
                </div>
                <div className="sell_basket">
                  <button onClick={() => {
                    navigate('/detail')
                  }}  >Sotib olish</button>
                  <button>Savatga</button>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}


