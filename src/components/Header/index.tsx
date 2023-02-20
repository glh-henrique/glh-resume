import React, { useState } from "react";
import Social from "../Social";

const Header = (): JSX.Element => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenNav(() => !openNav)}
        id="nav-btn"
        className={`nav-btn ${openNav && `active`}`}
      >
        <span className="nav-btn-cover">
          <span className="menu-line"></span>
        </span>
      </div>
      <div className={`s-nav ${openNav && `active`}`}>
        <div className="nav-count">
          <div className="current-num">
            <span>01</span>
          </div>
          <div className="pagination-sep">/</div>
          <div className="total-pages-num">07</div>
        </div>
        <div className="nav-container">
          <a className="site-title slow-scroll" href="#home">
            GUILHERME RICARDO
          </a>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </nav>
        </div>
        <Social />
      </div>
    </>
  );
};

export default Header;
