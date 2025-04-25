import React from "react";

const Header = (props) => {
  const { nombre } = props.datos;
  return (
    <div>
      <h1>Portfolio de {nombre} </h1>
      <hr />
    </div>
  );
};

export default Header;
