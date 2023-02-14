import React, { useEffect, useRef } from "react";

const ServicesSection = (): JSX.Element => {

  return (
    <section id="services" className="section">
      <div className="content-670">
        <h2 className="title">SERVICES</h2>
        <div className="section-des">
          Lorem ipsum dolor sit amet consectetu adipiscing elit viverra
          tristique placerat
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          tristique placerat in sat massa consectetur quisque. Nunc aces fames
          lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet
          settera aces volutpat in voltare lupar est phasellus.
        </p>
        <p>
          Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu.
          Vitae faucibus diam consequat aecenas. Turpis metus sit diam purus leo
          in varius ac quam. Nunc amet tristique set volutpat{" "}
          <a href="#">estars adipiscing</a> vulputate est phasellus. Volutpat
          faucibus per praesent aced nuncare voltare per settera lorem ipsum
          dolor.
        </p>
      </div>

      <ul
        className="serv-link-cover block-right jarallax"
        data-jarallax-element="0 40"
      >
        <li>
          <a href="#">DOWNLOAD CV</a>
        </li>
      </ul>
    </section>
  );
};

export default ServicesSection;
