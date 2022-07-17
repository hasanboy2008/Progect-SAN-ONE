import React from "react"
import "../Basket/Basket.css"
import Logo from"../../asest/Basket/san-one-logo.png"
import shoesBlack from "../../asest/Basket/shoes-black.png"
import shoesMoccasin from "../../asest/Basket/shoes-moccasin.png"
import shoesWhite from "../../asest/Basket/shoes-white.png"
import shoesGrey from "../../asest/Basket/shoes-grey.png"
import shoesBW from "../../asest/Basket/shoes-b-w.png"
import { useState } from "react"

export function Basket() {
  const card = JSON.parse(localStorage.getItem("card") || "[]");
  console.log(card.length);

  const[count, setCount] = useState(1);
//   Button count +1 va -1 uchun

  const basketData = [
      {
      id: 1,
      image: shoesBlack,
      text: "lorem ipsum lorem ipsum",
      artikul: "12345",
      count: 0,
      price: "399 000"
  },
  {
      id: 2,
      image: shoesMoccasin,
      text: "lorem ipsum lorem ipsum",
      artikul: "12345",
      count: 0,
      price: "399 000"
  },
  {
      id: 3,
      image: shoesWhite,
      text: "lorem ipsum lorem ipsum",
      artikul: "12345",
      count: 0,
      price: "399 000"
  },
  {
      id: 4,
      image: shoesGrey,
      text: "lorem ipsum lorem ipsum",
      artikul: "12345",
      count: 0,
      price: "399 000"
  },
  {
      id: 5,
      image: shoesBW,
      text: "lorem ipsum lorem ipsum",
      artikul: "12345",
      count: 0,
      price: "399 000"
  },
]

  return (
    <div className="basket-page">

       
        <div className="basket">
            <div className="basket-text">
                <p>Savatda 5 ta tovar bor</p>
            </div>

            <div className="basket-all">
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
                                <div className="basket-buttons">
                                    <h2 className="basket-h2">{count}</h2>
                                    <button className="button-decrement" onClick={() => setCount(count - 1)} disabled={count === 1}>-</button>
                                    <button className="button-increment" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                            <p className="basket-price">{parse.price}</p>
                            <span className="basket-close">x</span>

                            </div>
                        </div>
                        
                        
                    )
                })}
                
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
                    <button onClick={()=>{}}>
                    BUYURTMANI TASDIQLASH
                    </button>
                </div>
            </div> 
            
            </div>
        </div>


    // <div className="basket">
    //   <div className="basket-text">
    //     <p>
    //       Savatda <span>5</span> ta tovar bor
    //     </p>
    //   </div>

    //   <div className="basket-all">
    //     <div className="basket_count">
    //       <hr />
    //       <div className="count_basket">
    //         <div className="img_basket">
    //           <img src={basket_img} alt="" />
    //           <div className="bas_name">
    //             <p>lorem ipsum lorem ipsum </p>
    //             <span>Atrikul: 12345</span>
    //           </div>
    //         </div>
    //         <div className="count_btn">
    //           <button>-</button>
    //           <span>1</span>
    //           <button>+</button>
    //         </div>
    //         <div className="price">
    //           <p>399 000</p>
    //         </div>
    //         <button>x</button>
    //       </div>
    //     </div>
    //     <div className="basket-order">
    //       <img src={Logo} alt="" />
    //       <div className="basket-order-texts">
    //         <p>Narxi:</p>
    //         <p>1 995 000 so’m</p>
    //       </div>
    //       <div className="basket-order-texts">
    //         <p>Chegirma:</p>
    //         <p>- 10 %</p>
    //       </div>
    //       <div className="basket-order-texts">
    //         <p>Yetkazib berish:</p>
    //         <p>15 000 so’m</p>
    //       </div>
    //       <hr />
    //       <div className="basket-order-texts">
    //         <p className="basket-order-texts-1">Jami:</p>
    //         <p className="basket-order-texts-2">1 795 515 so’m</p>
    //       </div>
    //       <button onClick={() => {}}>BUYURTMANI TASDIQLASH</button>
    //     </div>
    //   </div>
    // </div>
  );
}

