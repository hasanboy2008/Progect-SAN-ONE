import React from "react";
import "./Courier.css"
import CourierShoes from '../../asest/Courier/courier-img.png'
import CourierFly from "../../asest/Courier/fly.png"

export function Courier(){
    return(
        <div className="Courier">
            <div className="Courier-top">
                <div className="Courier-texts">
                    <div className="Courier-texts-p">
                        <p className="Courier-white-texts">Mahsulot nomi</p>
                        <p className="Courier-orange-texts">Shpallar</p>
                    </div>
                    <div className="Courier-texts-p">
                        <p className="Courier-white-texts">Narxi</p>
                        <p className="Courier-orange-texts">399 000</p>
                    </div>
                    <div className="Courier-texts-p">
                        <p className="Courier-white-texts">To’lov usuli </p>
                        <p className="Courier-orange-texts">HUMO karta</p>
                    </div>
                    <div className="Courier-texts-p">
                        <p className="Courier-white-texts">O‘lcham</p>
                        <p className="Courier-orange-texts">43</p>
                    </div>
                    <div className="Courier-texts-p">
                        <p className="Courier-white-texts">Rangi</p>
                        <p className="Courier-orange-texts">To‘q ko‘k</p>
                    </div>
                </div>
                <div className="Courier-img">
                    <img src={CourierShoes} alt="" />
                </div>
            </div>

            <div className="Courier-bottom">
                <div className="Courier-deliver">
                    <img src={CourierFly} alt="" />
                    {/* Bu yerga funksiya yoziladi, vaqtinchalik rasmda berib ketdim */}
                </div>
                <div className="Courier-bottom-p">
                        <p className="Courier-white-texts">Sotib olingan sana </p>
                        <p className="Courier-orange-texts">01.01.2022</p>
                    </div>
                <div className="Courier-bottom-p">
                    <p className="Courier-white-texts">Yetkazib berish mudati </p>
                    <p className="Courier-orange-texts">14 kun</p>
                </div>
            </div>

        </div>
    )
}