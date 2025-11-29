import React from "react";
import "./Font.css";

const Font = ({ children }) => {
  return (
    <div style={{ fontFamily: "Shabnam-FD, system-ui, sans-serif" }}>
      {children}
    </div>
  );
};

export default Font;
