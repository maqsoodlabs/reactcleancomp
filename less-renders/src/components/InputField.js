import React, { useState } from "react";
import { Form } from "react-bootstrap";

const InputField = ({ updateHandler }) => {
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    updateHandler(e.target.value);
    setUserName(e.target.value);
  };
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Enter your name"
        onChange={handleUserName}
        value={userName}
      />
    </div>
  );
};

export default InputField;
