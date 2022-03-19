import React from 'react';
import './Styles/AboutUs.css';

export default function AboutUs() {
  return (
    <React.Fragment>
      <div className="fluid-container">
        <div className="infoContainer">
          <h2 className="about--title">Proyecto arcoíris</h2>
          <p className="about--phrase">
            "Atrevete a amarte a ti mismo y a los demas como si fueras un arcoíris"
          </p>
          <p className="about--info">
            Implementaremos paquetes turisticos con las agencias de viajes, los cuales incluiran un recorrido por los atractivos túristicos culturales, de entretenimiento y gastronomicos de la localidad.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
