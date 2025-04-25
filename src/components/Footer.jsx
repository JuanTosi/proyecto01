import React from "react";

const Footer = (props) => {
  const { redes } = props.datos;
  return (
    <div>
      <h4>
        <a href={redes.instagram} target="blank">
          Instagram
        </a>
        <br />
        <a href={redes.facebook} target="blank">
          Facebook
        </a>
        <br />
        <a href={redes.linkedin} target="blank">
          Linkedin
        </a>
        <br />
        <a href={redes.github} target="blank">
          GitHub
        </a>
      </h4>
    </div>
  );
};

export default Footer;
