import React from "react"
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./card.css";
export default function Cardlar({props}){
  // const products = useSelector((state) => state.reProducts);
  const navigate = useNavigate();
  return (
    <div className="cardlar">
      {props.map((item, index) => (
        <div className="new_Produc_1_1" key={index}>
          <figure>
            <img src={item.images[0]} alt="" />
          </figure>
          <p>{item.name}</p>
          <hr/>
          <div className="price_share_1">
            <div className="discount_pricw_1">
              <p>{item.price}</p>
              <span>{item.discount}</span>
            </div>
            <img src={item.share} alt="" />
            kdsb
          </div>
          <div className="sell_basket_1">
            <button
              onClick={() => {
                navigate(`/view/product?id=${item.id}`);
              }}
            >
              Sotib olish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}