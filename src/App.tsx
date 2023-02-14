import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import About from "./components/About";
import Social from "./components/Social";
import Header from "./components/Header";
import Home from "./components/Home";
import ServicesSection from "./components/ServicesSection";
import Skills from "./components/Skills";
import GlobalStyle from "./globalStyle";
import { theme } from "./theme";
import teste from "./utils/teste";
import Footer from "./components/Footer";

function App() {
  teste();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="doc-loader"></div>

      <div className="container">
        <div className="page-wrapper">
          <Header />
          <Home />
          {/* <ServicesSection /> */}
          <About />
          <Skills />
          {/* <Social /> */}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
