import "./footer.scss";
import React from "react";
import video2 from "../../assets/video(2).mp4";
import { FiSend } from "react-icons/fi";

export const Footer = () => {
  return (
    <section classname="footer">
      <div classname="videoDiv">
        <video src={video2} loop autoplay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contacDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
                SEND  <FiSend className ="icon"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
