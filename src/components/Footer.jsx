import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  const { redes } = props.datos;
  return (
    <div>
      <hr />
      <div className="anclas">
        <a href={redes.instagram} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={redes.facebook} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href={redes.linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={redes.github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
