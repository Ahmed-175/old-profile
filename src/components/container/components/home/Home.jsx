import React, { useEffect, useState } from "react";
import "./home.css";
import Img from "./ahmed.jpg";

const MyComponent = () => {
  const [workText, setWorkText] = useState("");

  useEffect(() => {
    const tet = () => {
      setTimeout(() => {
        setWorkText("frontend");
      }, 0);

      setTimeout(() => {
        setWorkText("backend");
      }, 4010);

      setTimeout(() => {
        setWorkText("UI/UX desiner");
      }, 8020);

      setTimeout(() => {
        setWorkText("full stack");
      }, 12030);
    };

    tet();
    const interval = setInterval(tet, 12000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <section id="home">
        <div className="home-left">
          <div>
            <h2>
              hi! i am <span className="ahmed-farag">ahmed farag</span>
            </h2>
            <h1>
              and i am <div className="work">{workText}</div>
            </h1>
            <button>Download CV</button>
          </div>
        </div>
        <div className="home-right">
          <div className="img">
            <img src={Img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyComponent;