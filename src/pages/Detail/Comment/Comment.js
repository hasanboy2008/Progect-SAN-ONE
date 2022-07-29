import React, { useState, useEffect } from "react";
import "./Comment.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { acLoading } from "../../../Redux/Loading";
import { useSnackbar } from "notistack";

import tg from "../../../asest/Detail/Group 8557.png";
import trash from "../../../asest/Detail/Trash 4.png";

export function Comment() {
  const [comments, setComments] = useState([]);
  const [relodComments, setReloadComments] = useState(false);
  const location = useLocation();
  const product_id = location.search.split("=")[1];
  const user = useSelector((state) => state.reUser);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios(`https://api.sanone.uz/viewComments/${product_id}`)
      .then((res) => {
        setComments(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product_id, relodComments]);

  return (
    <div id="addComment">
      <form
        id="form-addCommet"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(acLoading(true));

          if (e.target.comment.value.length > 10) {
            axios("https://api.sanone.uz/addComments", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              data: {
                product_id: product_id,
                userId: user.id,
                comment: e.target.comment.value,
              },
            })
              .then((res) => {
                console.log(res);
                e.target.comment.value = "";
                setReloadComments(!relodComments);
                dispatch(acLoading(false));
              })
              .catch((err) => {
                console.log(err);
                dispatch(acLoading(false));
              });
          } else {
            dispatch(acLoading(false));
            enqueueSnackbar("Комментарий должен быть больше 10 символов", {
              variant: "error",
            });
          }
        }}
      >
        <input type="text" name="comment" placeholder="Izoh yozing" />
        <button type="submit">
          <img src={tg} alt="" />
        </button>
      </form>
      <hr />

      <div id="viewCommet">
        <ol>
          {comments.map((item) => {
            return (
              <li id="sendComment" key={item.id}>
                <figure id="figure1">
                  <img src={item.userImg} alt="" />
                </figure>
                <div>
                  <span>
                    <i>{item.userName}</i>
                    <i>{item.date}</i>
                  </span>
                  <p>{item.comment}</p>
                  <div id="trash">
                    <div
                      style={item.userId !== user.id ? { display: "none" } : {}}
                      onClick={() => {
                        dispatch(acLoading(true));
                        axios
                          .delete(
                            `https://api.sanone.uz/deleteComment/${item.id}`
                          )
                          .then((res) => {
                            console.log(res.data);
                            setReloadComments(!relodComments);
                            dispatch(acLoading(false));
                          })
                          .catch((err) => {
                            console.log(err);
                            dispatch(acLoading(false));
                          });
                      }}
                    >
                      <img src={trash} alt="" />
                      <p>O‘chirish</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
