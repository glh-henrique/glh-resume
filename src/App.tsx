import React from "react";
import { ThemeProvider } from "styled-components";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
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
          <About />
          <Skills />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
