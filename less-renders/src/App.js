import React, { useState } from "react";
import "./App.css";
import DataForm from "./components/DataForm";
import { Button } from "react-bootstrap";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        style={{ width: "25rem", marginTop: "10px", marginBottom: "50px" }}
        onClick={() => setToggle(!toggle)}
        variant={toggle ? "danger" : "success"}
      >
        {toggle ? "Hide Form " : "Show Form"}
      </Button>
      {toggle ? <DataForm /> : null}
    </div>
  );
}

export default App;
