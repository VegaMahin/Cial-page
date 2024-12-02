import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="section-title">
        <h2>TERMINALES</h2>
      </div>
      <div className="testimonial-wrapper">
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="testimonial">
                <div className="testimonial-image">
                  <img src={d.img} alt={d.name} />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-meta">{d.name}</div>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          : "Cargando datos..."}
      </div>
    </div>
  );
};
