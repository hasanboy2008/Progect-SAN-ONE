import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css";
import "./Comments/Comment.css";
import Comments from "./Comments/Comments";
import { DetailInfo } from "./Info/Info";
import axios from "axios";
import NumberFormat from "react-number-format";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { acLoading } from "../../Redux/Loading";

export function Detail() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [showtab, setShowtab] = useState(1);
  const location = useLocation();
  const product_id = location.search.split("=")[1];
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [indexImg, setIndexImg] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reUser);

  const [size, setSize] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handletab = (e) => {
    setShowtab(e);
  };

  useEffect(() => {
    axios(` https://api.sanone.uz/view/product/${product_id}`)
      .then((res) => {
        setProduct(res.data[0]);
        setImages(res.data[0].images ? res.data[0].images : []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product_id]);

  const handelSize = (item) => {
    console.log(item);
  }

  return (
    <div className="Detail">
      <div className="Detail-Card">
        <div className="container">
          <div className="imgContainer">
            {images.map((img, index) => (
              <figure
                key={index}
                onClick={() => {
                  setSelectedImg(index);
                  setIndexImg(index);
                }}
              >
                <img src={img} alt="shoe" />
                <span
                  style={selectedImg === index ? { background: "none" } : {}}
                ></span>
              </figure>
            ))}
          </div>
          <img src={images[indexImg]} alt="" className="selected" />
        </div>
        <div className="card-about">
          <div className="a-name">
            <p>{product.name}</p>
          </div>

          {/* <div className="colors">
            <p>Chegirma</p>
            <p>-{product.discount}%</p>
          </div> */}

          <div className="price">
            <p className="price-name">Narxi</p>
            <p className="price-coast">
              <NumberFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" so'm"}
                renderText={(value) => (
                  <>
                    {product.discount === "0"
                      ? value
                      : (
                          product.price -
                          (product.price * product.discount) / 100
                        ).toFixed()}
                    {product.discount === "0" ? "" : " so'm"}
                  </>
                )}
              />
            </p>
            <p className="old-coast">
              {product.discount === "0" ? (
                ""
              ) : (
                <NumberFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" so'm"}
                />
              )}
            </p>
          </div>

          <div className="sizes">
            <p>O`lchamlar</p>
            <div className="size-group">
              {product.sizes
                ? product.sizes.map((size) => {
                    return (
                      <button className="size" key={size} onClick={() => handelSize(size)} >
                        <p> {size} </p>
                      </button>
                    );
                  })
                : ""}
            </div>
          </div>

          <div className="btns">
            <button
              className="btn-purchase"
              onClick={() => {
                navigate("/confirm");
              }}
            >
              Sotib olish
            </button>
            <button
              className="btn-basket"
              onClick={() => {
                dispatch(acLoading(true));
                axios(`https://api.sanone.uz/addCard/${user.id}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    token: user.token,
                  },
                  data: JSON.stringify({
                    ...product,
                    img: images[indexImg],
                    size: product.sizes[0],
                    userId: user.id,
                    quantity: 1,
                  }),
                })
                  .then((res) => {
                    if (res.data.status) {
                      enqueueSnackbar(res.data.message, {
                        variant: "success",
                      });
                      dispatch(acLoading(false));
                      dispatch({
                        type: "RELOAD_CARD",
                      });
                    } else {
                      enqueueSnackbar(res.data.message, {
                        variant: "error",
                      });
                      dispatch(acLoading(false));
                    }
                  })
                  .catch((err) => {
                    dispatch(acLoading(false));
                  });
              }}
            >
              Savatga
            </button>
          </div>
        </div>
      </div>

      <div className="Detail-Comment">
        <div className="btn-comments">
          <button
            className={showtab === 1 ? "info-btn active" : "info-btn"}
            onClick={() => handletab(1)}
          >
            Malumot
          </button>
          <button
            className={showtab === 2 ? "comment-btn active" : "comment-btn"}
            onClick={() => handletab(2)}
          >
            Komentariya
          </button>
        </div>

        <div className={showtab === 2 ? "" : "hide"}>
          <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
        </div>

        <div className={showtab === 1 ? "" : "hide"}>
          <DetailInfo product={product} />
        </div>
      </div>
    </div>
  );
}
