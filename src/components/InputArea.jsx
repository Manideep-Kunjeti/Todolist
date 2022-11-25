import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  // const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onFilled(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
