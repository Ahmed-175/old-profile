import React from "react";
import Img from "./ahmed.jpg";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h1>about</h1>
      <div className="abo">
        {" "}
        <div className="about-left">
          <div className="img">
            {" "}
            <img src={Img} />
          </div>
        </div>
        <div className="about-right">
          <p className="p">
            I am a high school student learning programming I learned many
            techniques such as html, css, javascript, act, node.js managoDB,
            express, and 3js and to develop myself daily to get the highest
            result
          </p>

          <button>Contant me</button>
        </div>
      </div>
    </section>
  );
}

export default About;
