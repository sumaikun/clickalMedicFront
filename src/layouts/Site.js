import React from 'react';
import Main from 'components/main';
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLanding";

function Site(props) {

  console.log("app props",props)

  return (
    <div>
      <Header
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

export default Site;
