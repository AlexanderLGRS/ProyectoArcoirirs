import React from 'react';
import './Styles/TouristPlanSection.css';

export default function TouristPlanSection() {
  return (
    <React.Fragment>
      <div
        id="carouselTourisControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <h1 className="sectionTitle">
            Recorrido ecologico Quebrada la vieja
          </h1>
          <div className="carousel-item active" data-bs-interval="10000">
            <p className="image--info">
              Ubicada en la localidad de Chapinero, la Quebrada La Vieja es un
              espacio natural para que los ciudadanos disfruten de un recorrido
              ecologico de aproximadamente 5,7 kilómetros de naturaleza y
              riqueza ambiental de los cerros orientales.
            </p>
            <img
              src="http://fasab.udistrital.edu.co:8080/image/image_gallery?uuid=18f1c661-c406-4377-9ece-69e64486b16c&groupId=98864&t=1479244441532"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <p className="image--info">
              El Sendero Quebrada la Vieja hace parte de los recorridos de los
              Cerros Orientales de Bogotá, ubicada en la localidad de Chapinero,
              específicamente en la calle 71 con la avenida Circunvalar. El
              camino cuenta con miradores y estaciones, que recorren los cerros
              mediante corredores ambientales que conectan con los barrios
              aledaños al sector.
            </p>
            <img
              src="https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-10/sendero-quebrada-la-vieja-1.jpg"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <p className="image--info">
              <ul>
                <h1> Recomendaciones</h1>
                <li>
                  Mantener el distanciamiento social de 2 metros en las filas de
                  ingreso y en el recorrido dentro del sendero.
                </li>
                <li> Evitar el contacto físico con otros asistentes.</li>
                <li> Usar ropa cómoda y calzado para senderismo.</li>
                <li> Hidratarse constantemente.</li>
                <li> Usar bloqueador solar.</li>
                <li> Realizar el recorrido por los sitios demarcados.</li>
              </ul>
            </p>
            <img
              src="https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-06/quebrada-la-vieja-ok.jpeg"
              className="d-block"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTourisControls"
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
          data-bs-target="#carouselTourisControls"
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
