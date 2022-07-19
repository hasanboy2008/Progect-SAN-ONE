import React from "react";
import "../Basket/Basket.css";
import Logo from "../../asest/Basket/san-one-logo.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { acLoading } from "../../Redux/Loading";



export function Basket() {
  const carts = useSelector((state) => state.reCart);
  const token = JSON.parse(localStorage.getItem("user") || "{}").token || false;
  const id = JSON.parse(localStorage.getItem("user") || "{}").id || false;
  const dipatch = useDispatch();
  const [count, setCount] = useState(1);
  //   Button count +1 va -1 uchun
//   console.log(token);
  return (
    <div className="basket-page">
      <div className="basket">
        <div className="basket-text">
          <p>Savatda 5 ta tovar bor</p>
        </div>

        <div className="basket-all">
          <div className="basket-home">
            {carts.map((parse, index) => {
              return (
                <div className="basket-json" key={index}>
                  <div className="basket-hr">
                    <hr />
                  </div>
                  {/* brand: "Dambog" colors: "#7C7C7C" country: "Uzbekistan"
                  discount: "0" id: "1" img:
                  "https://api.sanone.uz/img/SanOne16574531917290.jpg" name:
                  "Tufli" price: "150000" quantity: "1" season: "1234" sizes:
                  "43" type: "Koja" */}
                  <div className="basket-data" key={index}>
                    <img src={parse.img} alt="" />
                    <div className="basket-texts-2">
                      <p>{parse.name}</p>
                      <span>{parse.price}</span>
                    </div>
                    <div className="basket-buttons">
                      <h2 className="basket-h2">{parse.quantity}</h2>
                      <button
                        className="button-decrement"
                        onClick={() => setCount(count - 1)}
                        disabled={count === 1}
                      >
                        -
                      </button>
                      <button
                        className="button-increment"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="basket-price">{parse.price}</p>
                    <button
                      className="basket-close"
                      onClick={() => {
                        dipatch(acLoading(true));
                        axios(
                          `https://api.sanoneuz/deleteProductInCard/${id}/${index}`,
                          {
                            method: "DELETE",
                            headers: {
                              token: token,
                            },
                          }
                        )
                          .then((res) => {
                            console.log(res);
                            if (res.data.message) {
                              dipatch(acLoading(false));
                            } else {
                              dipatch(acLoading(false));
                            }
                          })
                          .catch((err) => {
                            console.log(err);
                            dipatch(acLoading(false));
                          });
                      }}
                    >
                      x
                    </button>
                  </div>
                </div>
              );
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
            <button onClick={() => {}}>BUYURTMANI TASDIQLASH</button>
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
