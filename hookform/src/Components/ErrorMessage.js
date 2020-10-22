import React from "react";

const ErrorMessage = ({ error }) => {
  return <small style={{ color: "red" }}>{error}</small>;
};

export default ErrorMessage;
