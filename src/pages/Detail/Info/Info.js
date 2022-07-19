import React from "react";
import "./Info.css";
import NumberFormat from "react-number-format";

export function DetailInfo({ product }) {
  return (
    <div className="info">
      <div className="product-name">
        <p className="names">Nomi</p> <p className="answers">{product.name}</p>
      </div>
      <hr />
      <div className="product-price">
        <p className="names">Narxi</p>{" "}
        <p className="answers">
          <NumberFormat
            value={product.price}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" so'm"}
          />
        </p>
      </div>
      <hr />

      <div className="product-period">
        <p className="names">Brend</p>
        <p className="answers">{product.brand}</p>
      </div>
      <hr />
      <div className="product-size">
        <p className="names">O'lchamlar</p>
        <p className="answers">
          {product.sizes
            ? product.sizes.map((size) => {
                return <span key={size}>{size}, </span>;
              })
            : ""}
        </p>
      </div>

      <hr />
      <div className="product-period">
        <p className="names">Mavsum</p>{" "}
        <p className="answers">{product.season}</p>
      </div>
      <hr />
      <div className="product-period">
        <p className="names">Turi</p>
        <p className="answers">{product.type}</p>
      </div>
      <hr />
    </div>
  );
}
