import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Required")
    .min(3, "Minimum 3 characters")
    .max(15, "Maximum 15 characters allowed"),

  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(4, "Minimum 4 characters")
    .max(10, "Maximum 10 characters allowed"),
});

const Signup = () => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    if (isSubmitted) {
      // resetting the form
      reset();
    }
  };

  const { isSubmitted } = formState;

  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Header
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            backgroundColor: "#ec5990",
            color: "#fff",
          }}
        >
          Sign up
        </Card.Header>
        <Form style={{ padding: "20px" }} onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicName">
            <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              ref={register}
            />
            {errors.name ? <ErrorMessage error={errors.name.message} /> : null}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              ref={register}
            />
            {errors.email ? (
              <ErrorMessage error={errors.email.message} />
            ) : null}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              ref={register}
            />
            {errors.password ? (
              <ErrorMessage error={errors.password.message} />
            ) : null}
          </Form.Group>

          <Button
            type="submit"
            style={{
              width: "100%",
              marginTop: "15px",
              backgroundColor: "#ec5990",
            }}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
