import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import Pokemon from "./Pokemon";
import UserList from "./UserList";

const DataForm = () => {
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      let temp = userList;
      temp.push(userName);
      setUserList(temp);
      setUserName("");
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
        <Row></Row>
        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={handleUserName}
            value={userName}
          />
          <UserList user={userList} />
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
