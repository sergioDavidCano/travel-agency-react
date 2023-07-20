import "./footer.scss";
import React from "react";
import video2 from "../../assets/video(2).mp4";
import { FiSend } from "react-icons/fi";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="videoVid">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
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
              SEND  <FiSend className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
