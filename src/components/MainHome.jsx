import React from "react";
import Card from "react-bootstrap/Card";
import "../css/mainHome.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainHome = (props) => {
  const { imagen, nombre, edad, descripcion, habilidades } = props.datos;
  return (
    <div>
      <div className="mainHome">
        <Card style={{ width: "20rem" }} className="bg-secondary">
          <Card.Img variant="top" src={imagen} />
          <div className="contenidoCard">
            <h4>Eperiencia Programando</h4>
            <ul className="ul">
              {habilidades.map((habilidad, index) => (
                <b>
                  <li key={index}>- {habilidad}</li>
                </b>
              ))}
            </ul>
          </div>
        </Card>
        <p className="texto">
          Mi nombre es {nombre}, tengo {edad} años. {descripcion}
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainHome;
