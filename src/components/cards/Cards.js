import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./card.css";
import { acLoading } from "../../Redux/Loading";
import { useDispatch } from "react-redux";

export default function Cardlar({ props }) {
  const dispatch = useDispatch();

  // const products = useSelector((state) => state.reProducts);
  const navigate = useNavigate();
  return (
    <div className="cardlar">
      {props.map((item, index) => (
        <div className="new_Produc_1_1" key={index}>
          <figure>
            <img src={item.images[0]} alt="" />
          </figure>
          <div className="price_share_1">
            <div className="discount_pricw_1">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <span>{item.discount <= 0 ? null : item.discount}</span>
            </div>
            <img src={item.share} alt="" />
            kdsb
          </div>
          <div className="sell_basket_1">
            <button
              onClick={() => {
                navigate(`/view/product?id=${item.id}`);
                dispatch(acLoading(false));
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
