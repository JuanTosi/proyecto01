import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

const Home = () => {
  const Alumno = {
    imagen: <img src="../public/imagen_perfil.jpg" alt="Imagen de Perfil" />,
    nombre: "Juan Tosi",
    edad: 27,
    habilidades: ["React", "JavaScript", "HTML", "CSS"],
    redes: {
      instagram: "https://www.instagram.com/juantosi1/",
      facebook: "https://www.facebook.com/juan.tosi.184/",
      linkedin: "https://www.linkedin.com/in/juan-tosi-488b66338/",
      github: "https://github.com/JuanTosi",
    },
  };

  return (
    <div>
      <Header datos={Alumno} />
      <MainHome datos={Alumno} />
      <Footer datos={Alumno} />
    </div>
  );
};

export default Home;
