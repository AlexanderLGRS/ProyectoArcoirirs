import React from 'react';
import './Styles/Social.css';

export default function Social() {
  return (
    <React.Fragment>
      <div className="container">
        <a
          className="socialLink facebook"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Proyecto-Arcoiris-102493169079085/"
        >
          <ion-icon size="large" name="logo-facebook"></ion-icon>
        </a>
        <a
          className="socialLink whatsapp"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/reflejo.arcoirirs/"
        >
          <ion-icon size="large" name="logo-whatsapp"></ion-icon>
        </a>
        <a
          className="socialLink instagram"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/reflejo.arcoirirs/"
        >
          <ion-icon size="large" name="logo-instagram"></ion-icon>
        </a>
      </div>
    </React.Fragment>
  );
}
