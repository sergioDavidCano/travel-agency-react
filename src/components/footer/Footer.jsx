import React from "react";
import "./footer.scss";
import video2 from "../../assets/video(2).mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi"

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
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div className="footerPharagraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              rerum suscipit error eveniet nostrum fugiat, quasi obcaecati
              accusantium distinctio eligendi?
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          
          <div className="footerLinks grid">
            {/*Group One*/}
            <div className="linkGroup">
              <snap className="groupTitle">OUR AGENCY</snap>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment 
              </li>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};
