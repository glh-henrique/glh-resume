import React from "react";
import { FooterWrap } from "./style";

const Footer = (): JSX.Element => {
  const returnToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrap id="footer" className="sectionF">
      <p>
        Developed by <span onClick={() => returnToTop()}>Me</span>. :)
      </p>
    </FooterWrap>
  );
};

export default Footer;
