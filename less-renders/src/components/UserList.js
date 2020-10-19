import React from "react";
import { ListGroup } from "react-bootstrap";

const UserList = (props) => {
  const { user } = props;

  return (
    <div>
      {user.length ? (
        <ListGroup style={{ marginTop: "10px" }}>
          {user.map((item, index) => {
            return (
              <ListGroup.Item key={index} variant="success">
                name : {item}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : null}
    </div>
  );
};

export default UserList;
