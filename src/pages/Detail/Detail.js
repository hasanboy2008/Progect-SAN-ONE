import React, { useState } from "react";
import "./Detail.css";
import "./Comments/Comment.css";
import Comments from "./Comments/Comments";
import { DetailInfo } from "./Info/Info";

import {Images} from "./Images";

export function Detail() {

    const [selectedImg, setSelectedImg] = useState(Images[0]);

    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    return (
        <div className="Detail">
            <div className="Detail-Card">
                <div className="container">
                    <div className="imgContainer">
                        {Images.map((img, index) => (
                            <img
                                style={{ border: selectedImg === img ? "3px solid black" : "" }}
                                src={img}
                                key={index}
                                alt="shoe"
                                onClick={() => setSelectedImg(img)}
                            />
                        ))}

                    </div>
                    <img src={selectedImg} alt="Selected" className="selected" />
                </div>
                <div className="card-about">
                    <div className="a-name"><p>Maxsulot nomi</p></div>

                    <div className="colors">
                        <p>Rangi</p>
                        <div className="color-groups ">
                            <div className="color color-smoke active-color"></div>
                            <div className="color color-black "></div>
                            <div className="color color-brown "></div>
                            <div className="color color-grey "></div>
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
                            <div className="size"><p>37</p></div>
                            <div className="size"><p>38</p></div>
                            <div className="size active-size"><p>39</p></div>
                            <div className="size active-size"><p>40</p></div>
                            <div className="size active-size"><p>41</p></div>
                            <div className="size active-size"><p>42</p></div>
                            <div className="size active-size"><p>43</p></div>
                            <div className="size active-size"><p>44</p></div>
                            <div className="size active-size"><p>45</p></div>
                            <div className="size"><p>46</p></div>
                        </div>
                    </div>


                    <div className="btns">
                        <div className="btn-purchase">
                            Sotib olish
                        </div>
                        <div className="btn-basket">
                            Savatga
                        </div>
                    </div>


                </div>
            </div>

            <div className="Detail-Comment">
                <div className="btn-comments">
                    <button className={ showtab===1 ? "info-btn active" : "info-btn"} onClick={() => handletab(1)}>Malumot</button>
                    <button className={ showtab===2 ? "comment-btn active" : "comment-btn"} onClick={() => handletab(2)}>Komentariya</button>
                </div>

                <div    
                    className={showtab===2 ? "" : "hide"}
                >
                    <Comments
                    commentsUrl="http://localhost:3004/comments"
                    currentUserId="1"
                />
                </div>
                
                <div 
                className={showtab===1 ? "" : ""}
                >
                <DetailInfo  />
                </div>
            </div>
        </div>

    )

}



// import React, { useEffect, useState } from "react";
// import "./Detail.css";
// import { Button } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// import WidgetsIcon from "@mui/icons-material/Widgets";
// import { acOpenMenu } from "../../Redux/OpenMenu";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useDispatch } from "react-redux";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";
// import { acLoading } from "../../Redux/Loading";
// import { useSnackbar } from "notistack";
// import { acUpdateProducts } from "../../Redux/Update";

// export function Detail() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState({});
//   const [viewImg, setViewImg] = useState(0);
//   const location = useLocation();
//   const { enqueueSnackbar } = useSnackbar();

//   const search = location.search.split("=")[1];

//   useEffect(() => {
//     if (!search) {
//       navigate("/products");
//     } else {
//       dispatch(acLoading(true));
//       axios(`http://localhost:5000/api/view/product/${search}`)
//         .then((res) => {
//           setProduct(res.data);
//           dispatch(acLoading(false));
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [search, dispatch, navigate]);

//   return (
//     <div id="view-product-container">
//       <div id="view-product-header">
//         <Button
//           variant="contained"
//           color="warning"
//           id="header-btn"
//           className="btn-openMenu"
//           onClick={() => {
//             dispatch(acOpenMenu(true));
//           }}
//         >
//           <WidgetsIcon />
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           id="header-btn"
//           onClick={() => {
//             navigate("/products");
//           }}
//         >
//           <ArrowBackIcon />
//         </Button>
//       </div>
//       <div id="view-product-body">
//         <div id="product-about">
//           <div id="product-about-left">
//             <div>
//               {product.images
//                 ? product.images.map((img, index) => {
//                     return (
//                       <figure
//                         key={index}
//                         onClick={() => {
//                           setViewImg(index);
//                         }}
//                       >
//                         <img src={img} alt="" />
//                         <span
//                           style={
//                             viewImg === index
//                               ? {
//                                   background: "none",
//                                 }
//                               : {}
//                           }
//                         ></span>
//                       </figure>
//                     );
//                   })
//                 : ""}
//             </div>
//             <div>
//               <figure>
//                 <img
//                   src={product.images ? product.images[viewImg] : ""}
//                   alt=""
//                 />
//               </figure>
//             </div>
//           </div>
//           <div id="product-about-right">
//             <p>{product.name}</p>

//             <div id="product-about-right-color">
//               <p>Rangi</p>
//               <div>
//                 {product.colors
//                   ? product.colors.map((color, index) => {
//                       return (
//                         <span
//                           key={index}
//                           style={{
//                             backgroundColor: color,
//                           }}
//                         ></span>
//                       );
//                     })
//                   : ""}
//               </div>
//             </div>




//             <div id="product-about-right-price">
//               <p>Narxi</p>
//               <p>
//                 {product.discount === "0"
//                   ? product.price
//                   : (
//                       product.price -
//                       (product.price * product.discount) / 100
//                     ).toFixed()}{" "}
//               </p>
//               <s>{product.discount === "0" ? "" : product.price}</s>
//             </div>

//             <div id="product-about-right-sizes">
//               <p>O'lchamlari</p>
//               <div>
//                 {product.sizes
//                   ? product.sizes.map((size, index) => {
//                       product.sizes.sort();
//                       return <span key={index}>{size}</span>;
//                     })
//                   : ""}
//               </div>
//             </div>

//             <div id="product-about-right-action">
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={() => {
//                   dispatch(acLoading(true));
//                   axios(`https://sanone.uz/api/delete/product/${product.id}`, {
//                     method: "DELETE",
//                     headers: {
//                       "Content-Type": "application/json",
//                       "Access-Control-Allow-Origin": "*",
//                     },
//                   })
//                     .then((res) => {
//                       if (res.data.message) {
//                         dispatch(acUpdateProducts());
//                         enqueueSnackbar(res.data.message, {
//                           variant: "success",
//                         });
//                         navigate("/products");
//                       } else {
//                         enqueueSnackbar(res.data.message, {
//                           variant: "error",
//                         });
//                       }
//                       dispatch(acLoading(false));
//                     })
//                     .catch((err) => {
//                       console.log(err);
//                       dispatch(acLoading(false));
//                     });
//                 }}
//               >
//                 <DeleteIcon />
//                 <span>O'chirish</span>
//               </Button>

//               <Button variant="contained" color="primary">
//                 <EditIcon />
//                 <span>Taxrirlash</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }