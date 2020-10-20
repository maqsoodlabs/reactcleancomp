import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import EmailInput from "./Molecules/EmailInput";
import FullNameInput from "./Molecules/FullNameInput";
import PasswordInput from "./Molecules/PasswordInput";
import {
  validationText,
  validateAll,
  validationEmail,
  validationPassword,
} from "../SchemaValidation";

let temp = [
  {
    name: "firstName",
    validator: validationText,
  },
  {
    name: "email",
    validator: validationEmail,
  },
  {
    name: "password",
    validator: validationPassword,
  },
];

const DataForm = () => {
  const formValues = useRef({});
  const updateValue = (value, fieldName) => {
    formValues.current[fieldName] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAll(formValues.current, temp).then((res) => {
      console.log("Validate All Status : ", res);
      if (res) {
        console.log("All Values Are Valid Submit Values Now");
        // All Values Are Valid Submit Values Now
      } else {
        console.log("Values are Invalid Do Nothing");
        // Values are Invalid Do Nothing
      }
    });
  };
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Header
          style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
        >
          Sign up
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label style={{ fontWeight: "bold" }}>Full Name</Form.Label>

              <FullNameInput
                validation={validationText}
                fieldName={temp[0].name}
                setFieldValue={updateValue}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
              <EmailInput
                validation={validationEmail}
                fieldName={temp[1].name}
                setFieldValue={updateValue}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <PasswordInput
                validation={validationPassword}
                fieldName={temp[2].name}
                setFieldValue={updateValue}
              />
            </Form.Group>

            <Button style={{ width: "100%" }} type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DataForm;
