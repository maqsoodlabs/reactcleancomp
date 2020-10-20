import React, { useRef, useState } from "react";
import InputField from "../InputField";
import ErrorMessage from "../ErrorMessage";

const FullNameInput = ({ validation, setFieldValue, fieldName }) => {
  const [name, setName] = useState(undefined);
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
        type="text"
        placeholder="Enter Name"
        name="name"
        onChange={(e) => {
          setName(e.target.value);
          validateResponse(e.target.value);
          setFieldValue(e.target.value, fieldName);
        }}
        onBlur={() => {
          validateResponse(name);
        }}
        value={name}
        onFocus={() => {
          setTouched(true);
        }}
      />
      <ErrorMessage touched={touched} errors={errors} />
    </div>
  );
};

export default FullNameInput;
