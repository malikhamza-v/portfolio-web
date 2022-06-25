import React, { useContext } from "react";
import "./Works.css";
import client1 from "../../img/client1.webp";
import client2 from "../../img/client2.webp";
import clientmain from "../../img/client-main.webp";
import client3 from "../../img/client3.webp";
import client4 from "../../img/client4.webp";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
          Here are some successful businesses that I have provided digital marketing services for.
            <br />
            All these brands are super happy for what they get.
            <br />
            I do every work as my personal work
            <br />
            You don't need to worry about anything.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={client1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={client2} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={clientmain} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={client3} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={client4} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
