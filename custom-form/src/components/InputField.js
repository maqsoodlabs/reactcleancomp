import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({
  type,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  onFocus,
}) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      onFocus={onFocus}
    />
  );
};

export default InputField;
