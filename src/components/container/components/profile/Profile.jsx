import React from "react";
import "./profile.css";
import Img1 from "./1.jpg";
import Img2 from "./2.jpg";
import Img3 from "./3.jpg";
import Img4 from "./4.png";
import Img5 from "./5.jpg";
import Img6 from "./6.jpg";

function Profile() {
  return (
    <section id="profile">
      <h1>profile</h1>
      <div className="img-div">
        <div className="anime p-1">
          <img src={Img1} className="img-pro" />
          <p>This is my profile</p>
        </div>
        <div className="anime p-2">
          <img src={Img2} className="img-pro" />{" "}
          <p>This site is an educational platform</p>
        </div>
        <div className="anime p-3">
          <img src={Img3} className="img-pro" />{" "}
          <p>This site is an educational platform</p>
        </div>
        <div className="anime p-4">
          <img src={Img4} className="img-pro" />{" "}
          <p>These are things I don't know but I've seen on the Internet.</p>
        </div>
        <div className="anime p-2">
          <img src={Img5} className="img-pro" />{" "}
          <p>These are things I don't know but I've seen on the Internet.</p>
        </div>
        <div className="anime p-4">
          <img src={Img6} className="img-pro" />{" "}
          <p>These are things I don't know but I've seen on the Internet.</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
