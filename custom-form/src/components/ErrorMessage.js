import React from "react";

const ErrorMessage = ({ touched, errors }) => {
  return (
    <div>
      {touched && errors ? (
        <small style={{ color: "red" }}>{errors}</small>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
