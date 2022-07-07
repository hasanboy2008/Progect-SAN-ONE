import React from "react";
import "./Info.css";

export function DetailInfo() {
    return(
        <div className="info">
            <div className="product-name">
                <p className="names">Nomi</p> <p className="answers"> mumkin</p>
            </div>
            <hr />
            <div className="product-price">
                <p className="names">Narxi</p> <p className="answers">399 000 so'm</p>
            </div>
            <hr />
            <div className="product-size">
                <p className="names">O'lchamlar</p> <p className="answers">39, 40, 41, 42, 43, 44, 45</p>
            </div>
            <hr />
            <div className="product-material">
                <p className="names">Material</p> <p className="answers">Toza timsoh terisi</p>
            </div>
            <hr />
            <div className="product-color">
                <p className="names">Rangi</p> <p className="answers">To'q ko'k</p>
            </div>
            <hr />
            <div className="product-period">
                <p className="names">Mavsum</p> <p className="answers">Mavsum</p>
            </div>
            <hr />  
        </div>
    );
}