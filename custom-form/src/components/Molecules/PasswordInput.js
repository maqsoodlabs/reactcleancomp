import React, { useState, useRef } from "react";
import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";

const PasswordInput = ({ validation, setFieldValue, fieldName }) => {
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState("");

  const validateResponse = (text) => {
    validation(text).then((res) => {
      setErrors(res);
    });
  };
  return (
    <div>
      <InputField
        type="password"
        placeholder="Enter password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
          validateResponse(e.target.value);
          setFieldValue(e.target.value, fieldName);
        }}
        onBlur={() => {
          validateResponse(password);
        }}
        value={password}
        onFocus={() => {
          setTouched(true);
        }}
      />
      <ErrorMessage touched={touched} errors={errors} />
    </div>
  );
};

export default PasswordInput;
