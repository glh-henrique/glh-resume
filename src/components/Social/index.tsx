import React from "react";

import GitIcon from "../../assets/images/github.svg";
import GitIconBlue from "../../assets/images/IconsBlue/github.svg";
import InstaIcon from "../../assets/images/instagram.svg";
import InstaIconBlue from "../../assets/images/IconsBlue/instagram.svg";
import LinkedinIcon from "../../assets/images/linkedin.svg";
import LinkedinIconBlue from "../../assets/images/IconsBlue/linkedin.svg";


const Social = ({ iconType } : {iconType? :string}): JSX.Element => {
  
  return (
    <ul className="nav-soc">
      <li>
        <a
          href="https://github.com/glh-henrique"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconType !== "blue" ? GitIcon : GitIconBlue} alt="github" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/glhhenrique/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconType !== "blue" ? LinkedinIcon : LinkedinIconBlue} alt="Linkedin" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/glhhenrique/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconType !== "blue" ? InstaIcon : InstaIconBlue} alt="Instagram" />
        </a>
      </li>
    </ul>
  );
};

export default Social;
