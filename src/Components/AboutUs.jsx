import React from 'react';
import './Styles/AboutUs.css';

export default function AboutUs() {
  return (
    <React.Fragment>
      <div className="fluid-container">
        <div className="infoContainer">
          <h2 className="about--title">Proyecto arcoíris</h2>
          <p className="about--phrase">
            "Atrévete a amarte a ti mismo y a los demás como si fueras un
            arcoíris"
          </p>
          <p className="about--info">
          Implementaremos paquetes turísticos con las agencias de viajes, los cuales incluirán un recorrido por los atractivos turísticos, culturales, de entretenimiento y gastronómicos de la localidad.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
