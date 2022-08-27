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
        img: item.img,
      });

      return null;
    });

    const sendOrderData = JSON.stringify({
      userId: user.id,
      order,
    });
    axios("https://api.sanone.uz/api/buy", {
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
                            dispatch(acLoading(false));
                            dispatch({
                              type: "RELOAD_CARD",
                            });
                          })
                          .catch((err) => {
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
                            dispatch(acLoading(false));
                            dispatch({
                              type: "RELOAD_CARD",
                            });
                          })
                          .catch((err) => {
                            dispatch(acLoading(false));
                          });
                      }}
                    >
                      <p>+</p>
                    </button>
                  </div>
                  <div className="basketcha">
                    <p className="basket-price"> narxi: {parse.price}</p>
                    <br></br>
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
                          dispatch(acLoading(false));
                        });
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 18"
                      fill="red"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_21_265)">
                        <path
                          d="M0.285713 2.25H4L5.2 0.675C5.35968 0.465419 5.56674 0.295313 5.80478 0.178154C6.04281 0.0609948 6.30529 0 6.57143 0L9.42857 0C9.69471 0 9.95718 0.0609948 10.1952 0.178154C10.4333 0.295313 10.6403 0.465419 10.8 0.675L12 2.25H15.7143C15.7901 2.25 15.8627 2.27963 15.9163 2.33238C15.9699 2.38512 16 2.45666 16 2.53125V3.09375C16 3.16834 15.9699 3.23988 15.9163 3.29262C15.8627 3.34537 15.7901 3.375 15.7143 3.375H15.0393L13.8536 16.4637C13.8152 16.8833 13.6188 17.2737 13.3029 17.558C12.987 17.8423 12.5745 17.9999 12.1464 18H3.85357C3.42554 17.9999 3.01302 17.8423 2.69711 17.558C2.38121 17.2737 2.18477 16.8833 2.14643 16.4637L0.960713 3.375H0.285713C0.209937 3.375 0.137264 3.34537 0.083683 3.29262C0.0301008 3.23988 0 3.16834 0 3.09375V2.53125C0 2.45666 0.0301008 2.38512 0.083683 2.33238C0.137264 2.27963 0.209937 2.25 0.285713 2.25ZM9.88571 1.35C9.8323 1.28034 9.76324 1.22379 9.68393 1.18475C9.60463 1.14572 9.51723 1.12527 9.42857 1.125H6.57143C6.48277 1.12527 6.39537 1.14572 6.31606 1.18475C6.23676 1.22379 6.1677 1.28034 6.11429 1.35L5.42857 2.25H10.5714L9.88571 1.35ZM3.28571 16.3617C3.29748 16.5019 3.36245 16.6325 3.46768 16.7277C3.57292 16.8228 3.7107 16.8754 3.85357 16.875H12.1464C12.2893 16.8754 12.4271 16.8228 12.5323 16.7277C12.6376 16.6325 12.7025 16.5019 12.7143 16.3617L13.8929 3.375H2.10714L3.28571 16.3617Z"
                          fill="red"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_21_265">
                          <rect
                            width="20"
                            height="20"
                            fill="red"
                            transform="matrix(-1 0 0 1 16 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
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
              {/* <p className="basket-order-p">Yetkazib berish:</p> */}
              {/* <p className="basket-order-p">15 000 so’m</p> */}
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
