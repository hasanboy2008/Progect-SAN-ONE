import React from "react";
import Slider from "react-slick";

    export default function ReactSlickDemo() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1920,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      return (
        <div className="container">
          <Slider className="silayderkatadiv" {...settings}>
            <div className="pazitiondiv">
              <h1>sasas</h1>
            </div>

            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Akbar Hoshimov</p>
                  <p>SMM mutaxasisi</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Ali </p>
                  <p>Grafik Dizayner</p>
                </div>
              </div>
            </div>

            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Javohir Saydaxmedov</p>
                  <p>Grafik Dizayner</p>
                </div>
              </div>
            </div>

            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Qobiljon Sobirjonov</p>
                  <p>Marketolog</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Abdurasul Tursunboyev</p>
                  <p>Full Stack</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Ravshan Ismoilov</p>
                  <p>Python Dasturchi</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Xurshidbek Urayimov </p>
                  <p>Manager</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Tolibjon Tursunov </p>
                  <p>Frontend Dasturchi</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Umarjon Abdulvohidov </p>
                  <p>Grafik Dizayner</p>
                </div>
              </div>
            </div>
            <div className="pazitiondiv">
              <div className="birinchidi">
                <div className="slider-user-name">
                  <p>Ahmadjon Dadaboyev </p>
                  <p>Backend dasturchi</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      );
    }

