import React, { useState } from "react";
import "./Detail.css";
import "./Comments/Comment.css";
import Comments from "./Comments/Comments";
import { DetailInfo } from "./Info/Info";

import Images from "./Images";

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