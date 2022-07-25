import React from "react";
import "../Basket/Basket.css";
import Logo from "../../asest/Basket/san-one-logo.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { acLoading } from "../../Redux/Loading";
import { useSnackbar } from "notistack";

export function Basket() {
  const carts = useSelector((state) => state.reCart);
  const user = useSelector((state) => state.reUser);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleBuyurtma = () => {
    dispatch(acLoading(true));
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

      return null;
    });

    const sendOrderData = JSON.stringify({
      userId: user.id,
      order,
    });

    axios("http://localhost:5000/api/buy", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },

      data: sendOrderData,
    })
      .then((res) => {
        dispatch(acLoading(false));
        enqueueSnackbar(res.data.message, {
          variant: "success",
        });
        dispatch({
          type: "RELOAD_CARD",
        });
      })
      .catch((err) => {
        dispatch(acLoading(false));
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
        });
      });
  };

  return (
    <div className="basket-page">
      <p className="basket-main-text">Savatda {carts.length} ta tovar bor</p>

      <div className="basket-all">
        <div className="basket-home">
          {carts.map((parse, index) => {
            return (
              <div className="basket-json" key={index}>
                <div className="basket-data" key={index}>
                  <div className="img">
                    <img src={parse.img} alt="" />
                  </div>
                  <div className="basket-texts-2">
                    <p className="basket-shoes-name">{parse.name}</p>
                    <p className="basket-size"> size : {parse.size} </p>
                  </div>

                  <div className="basket-button">
                    <button
                      className="basket-decrement"
                      onClick={() => {
                        dispatch(acLoading(true));

                        axios(
                          `https://api.sanone.uz/inc_dec_ProductInCard/${user.id}/${index}/dec`,
                          {
                            method: "POST",
                            headers: {
                              Accept: "*/*",
                              method: "POST",
                              "Content-Type": "application/json",
                              token: user.token,
                            },
                          }
                        )
                          .then((res) => {
                            console.log(res);
                            dispatch(acLoading(false));
                            dispatch({
                              type: "RELOAD_CARD",
                            });
                          })
                          .catch((err) => {
                            console.log(err);
                            dispatch(acLoading(false));
                          });
                      }}
                    >
                      <p>-</p>
                    </button>
                    <h2 className="basket-h2">{parse.quantity}</h2>
                    <button
                      className="basket-increment"
                      onClick={() => {
                        dispatch(acLoading(true));
                        axios(
                          `https://api.sanone.uz/inc_dec_ProductInCard/${user.id}/${index}/inc`,
                          {
                            method: "POST",
                            headers: {
                              Accept: "*/*",
                              method: "POST",
                              "Content-Type": "application/json",
                              token: user.token,
                            },
                          }
                        )
                          .then((res) => {
                            console.log(res);
                            dispatch(acLoading(false));
                            dispatch({
                              type: "RELOAD_CARD",
                            });
                          })
                          .catch((err) => {
                            console.log(err);
                            dispatch(acLoading(false));
                          });
                      }}
                    >
                      <p>+</p>
                    </button>
                  </div>
                  <div className="basketcha">
                    <p className="basket-price"> narxi: {parse.price}</p>
                    <p className="basket-discount">
                      {" "}
                      chegirma : {parse.discount}%{" "}
                    </p>
                  </div>
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
                    <p>+</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* basket home end */}

        {/* basket order start */}

        <div className="basket-order">
          <div className="img">
            <img src={Logo} alt="" />
          </div>
          <div className="basket-check-list">
            <div className="basket-order-texts">
              <p className="basket-order-p">Narxi:</p>
              <p className="basket-order-p">
                {carts.reduce((a, b) => a + +b.price * +b.quantity, 0)}so’m
              </p>
            </div>
            <div className="basket-order-texts">
              <p className="basket-order-p">Chegirma:</p>
              <p className="basket-order-p">
                {carts.reduce((a, b) => a + +b.discount, 0)} %
              </p>
            </div>

            <div className="basket-order-texts">
              <p className="basket-order-p">Yetkazib berish:</p>
              <p className="basket-order-p">15 000 so’m</p>
            </div>
          </div>
          <div className="basket-order-texts-total">
            <p className="basket-order-texts-1">Jami:</p>
            <p className="basket-order-texts-2">
              {carts.reduce((a, b) => a + +b.price * +b.quantity, 0) -
                carts.reduce((a, b) => a + +(b.price / 100) * b.discount, 0)}
              so'm
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

        {/* basket order end */}
      </div>
    </div>
  );
}
