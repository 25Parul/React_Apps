import React from "react";
import "./HelloWorld.css";

function HelloWorld() {
  console.log("HelloWorld component is rerendered");

  return (
    <div>
      <h1 className="helloWorldDiv"> Hello World! </h1>
      <p>Hi! I am Parul. It's so nice to meet you :)</p>
    </div>
  );
}

export default HelloWorld;
