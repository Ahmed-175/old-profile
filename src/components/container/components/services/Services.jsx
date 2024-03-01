import React from "react";
import "./services.css"

function Services() {
  return (
    <section id="services">
      <h1>services</h1>
      <div className="ser">
      <div className="card-ser a-1">
        <i className="fa-solid fa-pager"></i>
        <p>
        I can design a website for you to do anything you want from the shapes and the site will be responsive

        </p>
        <button className="btton">read more</button>
      </div>

      <div className="card-ser a-2">
      <i className="fa-solid fa-server"></i>
        <p>
          We Care About All The Questions And All The Details For All The
          Educational Stages. Every Question Is Difficult Or Easy, Or Even
          Intermediate. It Is On Our Website
        </p>
        <button className="btton">read more</button>
      </div>

      <div className="card-ser a-1">
        <i className="fa-solid fa-code"></i>
        <p>
          We Care About All The Questions And All The Details For All The
          Educational Stages. Every Question Is Difficult Or Easy, Or Even
          Intermediate. It Is On Our Website
        </p>
        <button className="btton">read more</button>
      </div>
      </div>

    </section>
  );
}

export default Services;
