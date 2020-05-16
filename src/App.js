import React from 'react';
import Main from './components/main';
import './App.css';
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLanding";

function App(props) {

  console.log("app props",props)

  return (
    <div>
      <Header
        href="/site/landing"
        color="transparent"
        brand="ClickAlMedic"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
      />

      <Main/>

      <Footer />
    </div>
  );
}

export default App;
