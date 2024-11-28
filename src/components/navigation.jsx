import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "} 
            <span className="sr-only">Toggle navigatisdsdson</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{ display: 'flex', alignItems: 'flex-start' }}>
  <img src="/img/WhatsApp Image 2024-11-13 at 2.04.24 PM.jpeg" alt="Logo" style={{ maxHeight: '50px', marginTop: '-20px' }} />
</a>

        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Acerca Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Destinos
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Terminales
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
