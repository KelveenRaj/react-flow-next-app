import React from "react";
import { Handle } from "reactflow";

const CustomHandle = (props) => {
  return (
    <Handle
      style={{
        width: 8,
        height: 8,
        background: "white",
        border: "2px solid black",
      }}
      {...props}
    />
  );
};

export default CustomHandle;
