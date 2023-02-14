import React, { useEffect, useRef } from "react";

import ImagePerson from "./assets/photo-1.png";
import ScrollIcon from "./assets/scroll-icon.svg";

const Home = (): JSX.Element => {

  return (
    <section id="home" className="section">
      <div className="container-wrap">
        <h1
          className="entry-title jarallax"
          data-jarallax-element="0 30"
        >
          Hello, <br />
          I’m <span>Guilherme Ricardo</span>
        </h1>
        <img
          className="main-photo block-right jarallax"
          data-jarallax-element="0 -30"
          src={ImagePerson}
          alt="person"
        />
        <a href="#services" className="main-btn slow-scroll">
          <img src={ScrollIcon} alt="arrow to scroll down" />
        </a>
      </div>
    </section>
  );
};

export default Home;
