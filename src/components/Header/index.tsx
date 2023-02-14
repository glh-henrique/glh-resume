import React, { lazy, useState } from "react";

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
              {/* <li>
                <a href="#services">Services</a>
              </li> */}
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              {/* <li>
                <a href="#social">Social</a>
              </li> */}
            </ul>
          </nav>
        </div>
        <ul className="nav-soc">
          <li>
            <a href="https://github.com/glh-henrique" target="_blank" rel="noreferrer">GIT.</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/glhhenrique/" target="_blank" rel="noreferrer">IN.</a>
          </li>
          <li>
            <a href="https://www.instagram.com/glhhenrique/" target="_blank" rel="noreferrer">IG.</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
