import React from 'react';
import lgbt1 from '../Assets/lgbt1.jpeg';
import lgbt3 from '../Assets/lgbt3.jpeg';
import lgbt4 from '../Assets/lgbt4.jpeg';
import lgbt5 from '../Assets/lgbt5.jpeg';

export default function FairSection() {
  return (
    <React.Fragment>
      <div
        id="carouselFairControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <h1 className="sectionTitle">
            Festival "Reflejando la luz del arcoíris"
          </h1>
          <div className="carousel-item active" data-bs-interval="10000">
            <p className="image--info">
              Crearemos un espacio en el que la comunidad, turistas y habitantes
              se sentiran libres de expresar sus gustos, identidad de genero y
              demostrar su creatividad y estilo en diferentes actividades.
            </p>
            <img src={lgbt1} className="d-block" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <p className="image--info">
              Este festival cultural tendra lugar todos los años el 10 de
              septiembre en el parque de los hippies (Calle 60 Av Kr 7 Bogotá)
            </p>
            <img src={lgbt5} className="d-block" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <p className="image--info">
              En busca de promover la diversidad en general, nos enfocaremos en
              fometar el respeto, igualdad, aceptacion y empatia, creando asi un
              espacio seguro y sano en el cual compartiremos y disfrutaremos
              como comunidad.
            </p>
            <img src={lgbt3} className="d-block" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <p className="image--info">
              Entre las actividades que desarrollaremos habra desfiles, musica, muestras culturales,
              gastronomia y un gran variedad de productos ofrecidos por emprendedores y comerciantes locales.
            </p>
            <img src={lgbt4} className="d-block" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselFairControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselFairControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );
}
