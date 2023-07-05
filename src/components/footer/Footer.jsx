import "./footer.scss";
import React from "react";
import video2 from "../../assets/video(2).mp4";

export const Footer = () => {
  return (
    <section classname="footer">
      <div classname="videoVid">
        <video src={video2} loop autoplay muted type="video/mp4"></video>
      </div>

      <div className="setConet container">
        <div className="contacDiv">
          <div className="text">
            <small>
              KEEP IN TOUCH
              <h2>Travel with us</h2>
            </small>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
                SEND  
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
