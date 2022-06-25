import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import { UilLinkedin } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>usamamughal@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/seo_expert_usama/" target="_blank">
            <Insta color="white" size={"3rem"} />
          </a>
          <Facebook color="white" size={"3rem"} />
          <UilLinkedin color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
