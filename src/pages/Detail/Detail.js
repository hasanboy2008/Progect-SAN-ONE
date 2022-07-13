import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css";
import "./Comments/Comment.css";
import Comments from "./Comments/Comments";
import { DetailInfo } from "./Info/Info";

// import { Images } from "./Images";
import axios from "axios";
import { Images } from "./Images";

export function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImg, setSelectedImg] = useState(0);

  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };
  const location = useLocation();
  const product_id = location.search.split("=")[1];

  const [product, setProduct] = useState({});
  console.log(product);

  useEffect(() => {
    axios(` https://api.sanone.uz/view/product/${product_id}`)
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product_id]);

  return (
    <div className="Detail">
      <div className="Detail-Card">
        <div className="container">
          <div className="imgContainer">
            {Images
              ? Images.map((img, index) => (
                  <figure onClick={() => setSelectedImg(index)}>
                    <img src={img} key={index} alt="shoe" />
                    <span
                      style={
                        selectedImg === index ? { background: "none" } : {}
                      }
                    ></span>
                  </figure>
                ))
              : ""}
          </div>
          <img
            src={Images ? Images[selectedImg] : ""}
            alt="Selected"
            className="selected"
          />
        </div>
        <div className="card-about">
          <div className="a-name">
            <p>Maxsulot nomi</p>
          </div>

          <div className="colors">
            <p>Rangi</p>
            <div className="color-groups ">
              {product.colors
                ? product.colors.map((color) => {
                    return <span style={{ background: color }}></span>;
                  })
                : ""}
            </div>
          </div>

          <div className="price">
            <p className="price-name">Narxi</p>
            <p className="price-coast">399 000</p>
            <p className="old-coast">499 000</p>
          </div>

          <div className="sizes">
            <p>O`lchamlar</p>
            <div className="size-group">
              <div className="size">
                <p>37</p>
              </div>
              <div className="size">
                <p>38</p>
              </div>
              <div className="size active-size">
                <p>39</p>
              </div>
              <div className="size active-size">
                <p>40</p>
              </div>
              <div className="size active-size">
                <p>41</p>
              </div>
              <div className="size active-size">
                <p>42</p>
              </div>
              <div className="size active-size">
                <p>43</p>
              </div>
              <div className="size active-size">
                <p>44</p>
              </div>
              <div className="size active-size">
                <p>45</p>
              </div>
              <div className="size">
                <p>46</p>
              </div>
            </div>
          </div>

          <div className="btns">
            <div className="btn-purchase">Sotib olish</div>
            <div className="btn-basket">Savatga</div>
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
          <DetailInfo />
        </div>
      </div>
    </div>
  );
}
