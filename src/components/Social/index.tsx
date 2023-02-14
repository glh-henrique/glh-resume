import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialWrapper } from "./style";

const Social = (): JSX.Element => {
  return (
    <section id="social" className="section">
      <h2 className="title">Social</h2>
      {/* <div className="content-670"> */}
      <SocialWrapper>
        <ul>
          <li>
            <a href="#">
              <i className="icon fa-brands fa-instagram instagram"></i>
              {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa-brands fa-whatsapp whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa-brands fa-twitter twitter"></i>
            </a>
          </li>
        </ul>
      </SocialWrapper>
    </section>
  );
};

export default Social;
