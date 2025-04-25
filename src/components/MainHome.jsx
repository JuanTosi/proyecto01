import React from "react";

const MainHome = (props) => {
  const { imagen, nombre, edad, habilidades } = props.datos;
  return (
    <div>
      <h2>Sobre mí</h2>
      {imagen}
      <h3>
        {nombre} - {edad} años
      </h3>
      <h3>Lenguajes que manejo:</h3>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default MainHome;
