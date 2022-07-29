import React from "react";
import "./Confirm.css";
import { useNavigate } from "react-router-dom";


export function Confirm() {
  const navigate = useNavigate();
  

  return (
    <div className="payment">
      <div className="payment-page">
        <div className="payment-texts">
          <div className="payment-texts-bottom">
           
          </div>
          <div className="payment-input-top">
            <input
              className="input_pl"
              type="text"
              placeholder="Manzilni to‘liq kiriting"
            />
          </div>
        </div>
        <div className="payment-buttons">
          <button
            onClick={() => {
              navigate("/view/product?id=2");
            }}
            className="button-back"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 5.24996H2.355L5.0775 1.97996C5.2048 1.8268 5.26605 1.62934 5.24777 1.43102C5.22948 1.2327 5.13316 1.04977 4.98 0.922463C4.82684 0.795159 4.62938 0.733912 4.43106 0.752197C4.23274 0.770482 4.0498 0.8668 3.9225 1.01996L0.1725 5.51996C0.147271 5.55576 0.124709 5.59336 0.105 5.63246C0.105 5.66996 0.105 5.69246 0.0525001 5.72996C0.0185052 5.81596 0.000705841 5.9075 0 5.99996C0.000705841 6.09243 0.0185052 6.18397 0.0525001 6.26996C0.0525001 6.30746 0.0524999 6.32996 0.105 6.36746C0.124709 6.40657 0.147271 6.44417 0.1725 6.47996L3.9225 10.98C3.99302 11.0646 4.08132 11.1327 4.18113 11.1794C4.28095 11.226 4.38982 11.2501 4.5 11.25C4.67524 11.2503 4.84507 11.1893 4.98 11.0775C5.05594 11.0145 5.11872 10.9372 5.16473 10.8499C5.21075 10.7627 5.2391 10.6672 5.24815 10.5689C5.25721 10.4707 5.2468 10.3717 5.21751 10.2775C5.18823 10.1833 5.14065 10.0957 5.0775 10.02L2.355 6.74996H11.25C11.4489 6.74996 11.6397 6.67095 11.7803 6.53029C11.921 6.38964 12 6.19888 12 5.99996C12 5.80105 11.921 5.61029 11.7803 5.46963C11.6397 5.32898 11.4489 5.24996 11.25 5.24996Z"
                fill="black"
              />
            </svg>
            <p>Ortga</p>
          </button>
          <button
            className="button-confirmation"
          
          >
            Tasdiqlash
          </button>
        </div>
      </div>
    </div>
  );
}
