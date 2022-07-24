import React from "react";
import "../Basket/Basket.css";
import Logo from "../../asest/Basket/san-one-logo.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { acLoading } from "../../Redux/Loading";
import { useSnackbar } from "notistack";

export function Basket() {
  const carts = useSelector((state) => state.reCart);
  const [count, setCount] = useState();
  const user = useSelector((state) => state.reUser);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleBuyurtma = () => {
    const order = [];

    carts.map((item) => {
      order.push({
        productId: item.id,
        code: item.code,
        price: item.price,
        quantity: item.quantity,
        discount: item.discount,
        sizes: item.size,
        img: item.img[0],
      });
    });

    const sendOrderData = JSON.stringify({
      userId: user.id,
      order,
    });

    console.log(sendOrderData);
  };


  return (
    <div className="basket-page">
      <div className="basket">
        <div className="basket-text">
          <p className="basket-main-text">
            Savatda {carts.length} ta tovar bor
          </p>
          <div className="basket-all">
            <div className="basket-home">
              {carts.map((parse, index) => {
                return (
                  <div className="basket-json" key={index}>
                    <div className="basket-hr">
                      <hr />
                    </div>
                    <div className="basket-data" key={index}>
                      <img src={parse.img} alt="" />
                      <div className="basket-texts-2">
                        <p className="basket-shoes-name">{parse.name}</p>

                        <span className="basket-shoes-articul">
                          {parse.discount}%
                        </span>
                      </div>

                      <div className="basket-button">
                        <button
                          className="basket-decrement"
                          onClick={() => setCount(count - 1)}
                          disabled={count === 1}
                        >
                          <p>-</p>
                        </button>
                        <h2 className="basket-h2">{parse.quantity}</h2>
                        <button
                          className="basket-increment"
                          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        >
                          <p>+</p>
                        </button>
                      </div>
                      <p className="basket-price">{parse.price}</p>
                      <p> {parse.size} </p>
                      <button
                        className="basket-close"
                        onClick={() => {
                          dispatch(acLoading(true));
                          axios(
                            `https://api.sanone.uz/deleteProductInCard/${user.id}/${index}`,
                            {
                              method: "DELETE",
                              headers: {
                                "Content-Type": "application/json",
                                token: user.token,
                              },
                            }
                          )
                            .then((res) => {
                              if (res.data.status) {
                                enqueueSnackbar(res.data.message, {
                                  variant: "success",
                                });

                                dispatch({
                                  type: "RELOAD_CARD",
                                });
                              } else {
                                enqueueSnackbar(res.data.message, {
                                  variant: "error",
                                });
                                dispatch({
                                  type: "RELOAD_CARD",
                                });
                              }
                              dispatch(acLoading(false));
                            })
                            .catch((err) => {
                              console.log(err);
                              dispatch(acLoading(false));
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
                <p className="basket-order-p">Narxi:</p>
                <p className="basket-order-p">
                  {carts.reduce((a, b) => a + +b.price, 0)}so’m
                </p>
              </div>
              <div className="basket-order-texts">
                {/* <p className="basket-order-p">Chegirma:</p>
                <p className="basket-order-p">
                  {carts.reduce((a, b) => a + +b.discount, 0)} %
                </p> */}
              </div>

              {/* <div className="basket-order-texts">
                <p className="basket-order-p">Yetkazib berish:</p>
                <p className="basket-order-p">15 000 so’m</p>
              </div> */}
              <hr />
              <div className="basket-order-texts">
                <p className="basket-order-texts-1">Jami:</p>
                <p className="basket-order-texts-2">
                  {carts.reduce((a, b) => a + +b.price, 0) -
                    carts.reduce(
                      (a, b) => a + +(b.price / 100) * b.discount,
                      0
                    )}
                </p>
              </div>
              <button
                onClick={() => {
                  handleBuyurtma(carts);
                }}
              >
                BUYURTMANI TASDIQLASH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
