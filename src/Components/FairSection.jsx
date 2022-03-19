import React from 'react';

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
            Feria "Reflejando la luz del arcoíris"
          </h1>
          <div className="carousel-item active" data-bs-interval="10000">
            <p className="image--info">
              Crearemos un espacio en el que la comunidad, turistas y habitantes
              se sentiran libres de expresar sus gustos, identidad de genero y
              demostrar su creatividad y estilo en diferentes actividades.
            </p>
            <img
              src="http://fasab.udistrital.edu.co:8080/image/image_gallery?uuid=18f1c661-c406-4377-9ece-69e64486b16c&groupId=98864&t=1479244441532"
              className="d-block"
              alt="..."
            />
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
