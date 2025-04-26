import React from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Footer from "../components/Footer";

const Home = () => {
  const Alumno = {
    imagen: "/imagen_perfil.jpg",
    nombre: "Juan Tosi",
    edad: 27,
    habilidades: ["React", "JavaScript", "C#", "Java"],
    descripcion:
      "Soy estudiante de la Tecnicatura Universitaria en Programacion en la UTN - FRT. Actualmente me encuentro cursando el 2° año de la carrera, llevo creados varios proyectos a modo de practica que me ayudan a desarrollar mis habilidades en programacion.",
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
