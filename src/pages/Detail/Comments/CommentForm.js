import { useState } from "react";

import tg from "../../../asest/Detail/Group 8557.png"

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit} >
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

      {/* {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )} */}
    </form>
  );
};

export default CommentForm;