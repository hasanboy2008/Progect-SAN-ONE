import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CSS import

import "../Katalog/katalog.css";
// Image import
import image1 from "../../asest/katalog/image1.png";
import image2 from "../../asest/katalog/image2.png";
import image3 from "../../asest/katalog/image3.png";
import image4 from "../../asest/katalog/image4.png";
import image5 from "../../asest/katalog/image5.png";
import image6 from "../../asest/katalog/image6.png";
import image7 from "../../asest/katalog/image7.png";
import image8 from "../../asest/katalog/image8.png";
import bcImage1 from "../../asest/katalog/bcImage1.png";
import bcImage2 from "../../asest/katalog/bcImage2.png";
import bcImage3 from "../../asest/katalog/bcImage3.png";

export function Katalog() {
  // database - malumotlar toplami
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 1,
      image: image1,
      name: "Makasima",
    },
    {
      id: 2,
      image: image2,
      name: "Krossovka",
    },
    {
      id: 3,
      image: image3,
      name: "Ishlov berilgan teri",
    },
    {
      id: 4,
      image: image4,
      name: "Klassik krossovka",
    },
    {
      id: 5,
      image: image5,
      name: "Qochoq poyabzal",
    },
    {
      id: 6,
      image: image6,
      name: "Shpallar",
    },
    {
      id: 7,
      image: image7,
      name: "Ikki rangli",
    },
    {
      id: 8,
      image: image8,
      name: "Klassicheskiy",
    },
  ];
  console.log(data);

  return (
    <div className="katalog">
      <div className="bcgImage">
        <div className="bcgImage1">
          <img src={bcImage1} alt="" />
        </div>
        <div className="bcgImage2">
          <img src={bcImage2} alt="" />
        </div>
        <div className="bcgImage3">
          <img src={bcImage3} alt="" />
        </div>
      </div>

      <div className="katalog-main">
        <div className="top">
          <p>Katalog</p>
          <span>Mahsulot turlari bo'yicha ko'rib chiqing</span>
        </div>

        <div className="container">
          {data.map((item) => (
            <div key={item.id} className="box-container">
              <button
                onClick={() => {
                  navigate("/all");
                }}
              >
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
