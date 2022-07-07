import React from "react";
import "../Basket/Basket.css"
import Logo from"../../asest/Basket/san-one-logo.png"
import shoesBlack from "../../asest/Basket/shoes-black.png"
// import shoesMoccasin from "../../asest/Basket/shoes-moccasin.png"


export function Basket(){
    const basketData = [
        {
        id: 1,
        image: shoesBlack,
        text: "lorem ipsum lorem ipsum",
        artikul: "12345",
        price: "399 000"
    },
    {
        id: 1,
        image: shoesBlack,
        text: "lorem ipsum lorem ipsum",
        artikul: "12345",
        price: "399 000"
    },
    {
        id: 1,
        image: shoesBlack,
        text: "lorem ipsum lorem ipsum",
        artikul: "12345",
        price: "399 000"
    },
    {
        id: 1,
        image: shoesBlack,
        text: "lorem ipsum lorem ipsum",
        artikul: "12345",
        price: "399 000"
    },
    {
        id: 1,
        image: shoesBlack,
        text: "lorem ipsum lorem ipsum",
        artikul: "12345",
        price: "399 000"
    },
    {
        id: 1,
        image: shoesBlack,
        text: "lorem ipsum lorem ipsum",
        artikul: "12345",
        price: "399 000"
    },

    // Domla json kopiya qilganda eniga qarab ketyabt, column qilish kerak
]

    
    return(
        <div className="basket">
            <div className="basket-text">
                <p>Savatda 5 ta tovar bor</p>
            </div>
            <div className="basket-all"></div>
            <div className="basket-home">
                
                {basketData.map((parse, index) => {
                    return(
                        <div className="basket-json">
                            <div className="basket-hr">
                                <hr />
                            </div>
                            <div className="basket-data" key={index}>
                                <img src={parse.image} alt="" />
                                <div className="basket-texts-2">
                                    <p>{parse.text}</p>
                                    <span>{parse.artikul}</span>
                                </div>
                            <p className="basket-price">{parse.price}</p>
                            <svg className="basket-close" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1004 19.0869L6.85303 6.83957" stroke="#A4A4A4" stroke-width="2.04122" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.85303 19.0869L19.1004 6.83957" stroke="#A4A4A4" stroke-width="2.04122" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </div>
                        </div>
                        
                        
                    )
                })}
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
                    <button>
                    BUYURTMANI TASDIQLASH
                    </button>
                </div>
            </div>
            
                
            
            
        </div>
        
    )
}