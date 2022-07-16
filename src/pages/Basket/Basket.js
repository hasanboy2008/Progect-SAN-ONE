import React from "react";
import "../Basket/Basket.css";
import Logo from "../../asest/Basket/san-one-logo.png";

import "../Basket/Basket.css";
import basket_img from "../../asest/katalog/image_1.jpg"

export function Basket() {
  const card = JSON.parse(localStorage.getItem("card") || "[]");
  console.log(card.length);
  return (
    <div className="basket">
      <div className="basket-text">
        <p>
          Savatda <span>5</span> ta tovar bor
        </p>
      </div>

      <div className="basket-all">
        <div className="basket_count">
          <hr />
          <div className="count_basket">
            <div className="img_basket">
              <img src={basket_img} alt="" />
              <div className="bas_name">
                <p>lorem ipsum lorem ipsum </p>
                <span>Atrikul: 12345</span>
              </div>
            </div>
            <div className="count_btn">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="price">
              <p>399 000</p>
            </div>
            <button>x</button>
          </div>
        </div>
        <div className="basket-order">
          <img src={Logo} alt="" />
          <div className="basket-order-texts">
            <p>Narxi:</p>
            <p>1 995 000 so’m</p>
          </div>
          <div className="basket-order-texts">
            <p>Chegirma:</p>
            <p>- 10 %</p>
          </div>
          <div className="basket-order-texts">
            <p>Yetkazib berish:</p>
            <p>15 000 so’m</p>
          </div>
          <hr />
          <div className="basket-order-texts">
            <p className="basket-order-texts-1">Jami:</p>
            <p className="basket-order-texts-2">1 795 515 so’m</p>
          </div>
          <button onClick={() => {}}>BUYURTMANI TASDIQLASH</button>
        </div>
      </div>
    </div>
  );
}
