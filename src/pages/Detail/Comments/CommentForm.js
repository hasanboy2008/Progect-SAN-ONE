import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
import tg from "../../../asest/Detail/Group 8557.png";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const user = useSelector((state) => state.reUser);
  const location = useLocation();
  const product_id = location.search.split("=")[1];
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
    axios("https://api.sanone.uz/addComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        product_id: product_id,
        userId: user,
        comment: "lorem ipsum",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="textArea">
        <textarea
          placeholder="Izoh yozing"
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="comment-form-button" disabled={isTextareaDisabled}>
          {submitLabel} <img src={tg} alt="" />
        </button>
      </div>

      <hr />
    </form>
  );
};

export default CommentForm;
