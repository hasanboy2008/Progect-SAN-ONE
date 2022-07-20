import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CSS import

import "../Katalog/katalog.css";
// Image import
import image_1 from "../../asest/katalog/image_1.jpg";
import image_2 from "../../asest/katalog/image_2.jpg";
import image_3 from "../../asest/katalog/image_3.jpg";
import image_4 from "../../asest/katalog/image_4.jpg";
import image_5 from "../../asest/katalog/image_5.jpg";
import image_6 from "../../asest/katalog/image_6.jpg";
import image_7 from "../../asest/katalog/image_7.jpg";
import image_8 from "../../asest/katalog/image_8.jpg";


export function Katalog() {
  // database - malumotlar toplami
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 1,
      image: image_1,
      name: "Makasima",
    },
    {
      id: 2,
      image: image_2,
      name: "Krossovka",
    },
    {
      id: 3,
      image: image_3,
      name: "Ishlov berilgan teri",
    },
    {
      id: 4,
      image: image_4,
      name: "Klassik krossovka",
    },
    {
      id: 5,
      image: image_5,
      name: "Qochoq poyabzal",
    },
    {
      id: 6,
      image: image_6,
      name: "Shpallar",
    },
    {
      id: 7,
      image: image_7,
      name: "Ikki rangli",
    },
    {
      id: 8,
      image: image_8,
      name: "Klassicheskiy",
    },
  ];
  return (
    <div className="katalog">
      <div className="katalog-main">
        <div className="top">
          <p>Katalog</p>
          <span>Mahsulot turlari bo'yicha ko'rib chiqing</span>
        </div>

        <div className="container">
          {data.map((item, index) => (
            <div key={index} className="box-container">
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
