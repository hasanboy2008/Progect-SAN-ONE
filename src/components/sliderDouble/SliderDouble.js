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
          fill: "row",
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 1,
          },
          470: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1720: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="new_Produc_1">
              <figure>
                <img src={item.images[0]} alt="" />
              </figure>
              <p>{item.name}</p>
              <hr />
              <div className="price_share">
                <div className="discount_pricw">
                  <p>{item.price}</p>
                  <span>{   
                  item.discount <= 0 ? null : item.discount
                  }</span>


                

                  
                </div>
                {/* <img src={item.share} alt="" /> */}
           
              </div>
              <div className="sell_basket">
                <button
                  onClick={() => {
                    navigate(`/view/product?id=${item.id}`);
                  }}
                >
                  Sotib olish
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
