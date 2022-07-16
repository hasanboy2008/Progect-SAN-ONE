import React from "react"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./card.css";
export default function Cardlar(){
  const products = useSelector((state) => state.reProducts);
  const newProducts = [...products, ...products];
  const navigate = useNavigate();
  return(
    <div className="cardlar">
      {newProducts.map((item, index) => (
            <div className="new_Produc_1" key={index}>
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
  )
}