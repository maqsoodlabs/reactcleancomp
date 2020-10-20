import React, { useState, useRef } from "react";
import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";

const EmailInput = ({ validation, setFieldValue, fieldName }) => {
  const [email, setEmail] = useState("");
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
        type="email"
        placeholder="Enter email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
          validateResponse(e.target.value);
          setFieldValue(e.target.value, fieldName);
        }}
        onBlur={() => {
          validateResponse(email);
        }}
        value={email}
        onFocus={() => {
          setTouched(true);
        }}
      />
      <ErrorMessage touched={touched} errors={errors} />
    </div>
  );
};

export default EmailInput;
