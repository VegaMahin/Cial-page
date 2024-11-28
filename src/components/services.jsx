import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
          En Cialbus, nos preocupamos por brindarte una experiencia de viaje única, cómoda y segura. Todas nuestras unidades cuentan con una serie de características diseñadas para tu confort
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="service-icon">
                    {/* Usamos <img> para cargar las imágenes en lugar de iconos */}
                    <img
                      src={d.icon} // Esto cargará la imagen desde la ruta especificada en el objeto `d.icon`
                      alt={d.name} // Añadimos el alt para accesibilidad
                      className="service-icon" // Esta clase aplica el estilo circular a la imagen
                    />
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
