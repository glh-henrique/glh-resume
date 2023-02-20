import React from "react";
import Signature from "./assets/signature.svg";
import AboutImg from "./assets/about-img.png";
import Social from "../Social";
import { StyledLiSocial } from "./style";

const About = (): JSX.Element => {
  const { innerWidth: width } = window;
  console.log(width);

  return (
    <section id="about" className="section">
      <h2 className="title">ABOUT</h2>

      <div className="content-670">
        <p>
          I've worked as a front-end developer and systems analyst for nine
          years. I use a variety of technologies, including Angular, React,
          TypeScript, and NodeJS, depending on the business need. I constantly
          stay up to speed with the technology I use, as well as having a
          passion for additional programming languages.
        </p>
      </div>

      <img
        className="about-img block-right"
        data-jarallax-element="0 -40"
        src={AboutImg}
        alt=""
      />

      <ul
        className="about-info"
        data-threshold="0 0"
        data-jarallax-element="40 0"
      >
        <li>
          <h6>EMAIL</h6>
          <a href="mailto:jackob@yourwebsite.com">glh.henrique@gmail.com</a>
        </li>
        <li>
          <h6>ROLE</h6>
          <span>Frontend Developer</span>
        </li>
        <li>
          <h6>PHONE</h6>
          <a href="tel:+987987654321">(+353) 087 153 1497</a>
        </li>
        {width < 1199 && (
          <StyledLiSocial>
            <h6>Follow me!</h6>
            <Social iconType="blue" />
          </StyledLiSocial>
        )}

        {/* <StyledLi>
          <ButtonDownload>
            DOWNLOAD CV
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
          </ButtonDownload>
        </StyledLi> */}
      </ul>

      <div className="about-text content-670">
        <p>
          Hi! My name is Guilherme and I'm really happy that you're reading
          this! I'm 31 years old and currently living in Dublin. Like every good
          Brazilian, I'm a cheerful and persevering person who loves a good
          beer! Hahaha. In addition, I love reading comics, biking, hiking, and
          playing basketball. I'm passionate about what I do - I've been a
          frontend developer for years and I love coding. I always dedicate
          myself a lot and strive to do my best in everything I do. I have a
          great interest in music, history, and technology, and I believe it's
          important to always be learning and developing.
          <br />
        </p>
      </div>

      <img className="signature" src={Signature} alt="" />
    </section>
  );
};

export default About;
