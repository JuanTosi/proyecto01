import React from "react";
import "../css/header.css";

const Header = (props) => {
  const { nombre } = props.datos;
  return (
    <div className="header">
      <br />
      <h1>Portfolio {nombre} </h1>
      <hr />
    </div>
  );
};

export default Header;
