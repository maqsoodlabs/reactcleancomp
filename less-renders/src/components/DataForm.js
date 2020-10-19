import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Pokemon from "./Pokemon";
import InputField from "./InputField";
import UserList from "./UserList";

const DataForm = () => {
  const userName = useRef();
  const userList = useRef([]);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.current) {
      let temp = userList.current;
      temp.push(userName.current);
      userList.current = temp;
      setToggle(!toggle);
    } else {
      console.log("Add some value");
    }
  };

  const willUnmount = () => {
    console.log("Component unmount called");
  };

  useEffect(() => {
    console.log("Data form useEffect");
    return willUnmount;
  }, []);

  useEffect(() => {
    if (userName.current === "asim") {
      console.log("ASIM IS ENTERED");
    }
  }, [userName.current]);

  return (
    <Card style={{ width: "30rem", padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        FORM
      </h2>
      <Form>
        <Form.Group>
          <Form.Label style={{ fontWeight: "bold" }}>User Name</Form.Label>
          <InputField updateHandler={(val) => (userName.current = val)} />
          <UserList user={userList.current} />
        </Form.Group>

        <Button type="submit" style={{ width: "100%" }} onClick={handleSubmit}>
          Add
        </Button>
      </Form>

      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "40px",
        }}
      >
        Favourite Pokemon
      </h2>
      <Card style={{ marginTop: "20px" }}>
        <Pokemon />
      </Card>
    </Card>
  );
};

export default DataForm;
