import React from 'react';
import './Styles/Header.css';
import logo from '../Assets/logo.png'
export default function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <img className='logo' src={logo} alt="" />
        </div>
      </nav>
    </React.Fragment>
  );
}
