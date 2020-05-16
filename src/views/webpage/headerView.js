import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import HeaderLinks from "components/Header/HeaderLinks";
import GridItem from "components/Grid/GridItem";
import Header from "components/Header/Header";

import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
//import Button from "components/CustomButtons/Button.js";
import Image from 'material-ui-image'
import logoPage from 'assets/img/logo.png'

import SectionNavbars from "components/Sections/SectionNavbars.js";
import Search from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ProductSection from "views/LandingPage/Sections/ProductSection.js";

import WorkSection from "views/LandingPage/Sections/WorkSection.js";

import Icon from "@material-ui/core/Icon";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Tooltip from "@material-ui/core/Tooltip";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import { Apps, CloudDownload, Home , AttachMoney, Book, People , PersonAdd, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/components.js";

import styleLand from "assets/jss/material-kit-react/views/landingPage.js"

import styleNav from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

import styleLink from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import TeamSection from "views/LandingPage/Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyleLink = makeStyles(styleLink);

const useStyles = makeStyles(styles);

const useStyleNav = makeStyles(styleNav);

export default function HeaderView(props) {
    const classes = useStyles();
    const classesLink = useStyleLink();
    const classNav = useStyleNav();
    const { ...rest } = props;
    return (
      <div>

        <Header
          logo={logoPage}
          leftLinks={
            <div>
            <List className={classesLink.list}>
              <ListItem className={classesLink.listItem}>
                <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classesLink.navLink}
                >
                  <Home className={classesLink.icons} /> Home
                </Button>
              </ListItem>
              <ListItem className={classesLink.listItem}>
                <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classesLink.navLink}
                >
                  <People className={classesLink.icons} /> Abous Us
                </Button>
              </ListItem>
              <ListItem className={classesLink.listItem}>
                <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classesLink.navLink}
                >
                  <AttachMoney className={classesLink.icons} /> Prices
                </Button>
              </ListItem>
              <ListItem className={classesLink.listItem}>
                <Button
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                  color="transparent"
                  target="_blank"
                  className={classesLink.navLink}
                >
                  <Book className={classesLink.icons} /> Blog
                </Button>
              </ListItem>
            </List>
          </div>}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}

          rightLinks={
            <div>
              <List className={classes.list}>
                <ListItem className={classesLink.listItem}>
                  <Button
                    href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                    color="transparent"
                    target="_blank"
                    className={classesLink.navLink}
                  >
                    <PersonAdd className={classesLink.icons} /> Registrarse
                  </Button>
                </ListItem>
                <ListItem className={classesLink.listItem}>
                  <Button
                    href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                    color="transparent"
                    target="_blank"
                    className={classesLink.navLink}
                  >
                    <Person className={classesLink.icons} /> Iniciar Sesión
                  </Button>
                </ListItem>
              </List>
              <CustomInput
                white
                inputRootCustomClasses={classesLink.inputRootCustomClasses}
                formControlProps={{
                  className: classesLink.formControl
                }}
                inputProps={{
                  placeholder: "Buscar",
                  inputProps: {
                    "aria-label": "Buscar",
                    className: classesLink.searchInput
                  }
                }}
              />
              <Button justIcon round color="white">
                <Search className={classesLink.searchIcon} />
              </Button>
              <List className={classesLink.list}>
              <ListItem className={classesLink.listItem}>


                <Tooltip
                  id="instagram-twitter"
                  title="Follow us on twitter"
                  placement={window.innerWidth > 959 ? "top" : "center"}
                  classes={{ tooltip: classesLink.tooltip }}
                >
                  <Button
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    color="transparent"
                    className={classesLink.navLink}
                  >
                    <i className={classesLink.socialIcons + " fab fa-twitter"} />
                  </Button>
                </Tooltip>
              </ListItem>
              <ListItem className={classesLink.listItem}>
                <Tooltip
                  id="instagram-facebook"
                  title="Follow us on facebook"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classesLink.tooltip }}
                >
                  <Button
                    color="transparent"
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    className={classesLink.navLink}
                  >
                    <i className={classesLink.socialIcons + " fab fa-facebook"} />
                  </Button>
                </Tooltip>
              </ListItem>
              <ListItem className={classesLink.listItem}>
                <Tooltip
                  id="instagram-tooltip"
                  title="Follow us on instagram"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classesLink.tooltip }}
                >
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    className={classesLink.navLink}
                  >
                    <i className={classesLink.socialIcons + " fab fa-instagram"} />
                  </Button>
                </Tooltip>
              </ListItem>
              </List>
            </div>
          }

        />
        <Parallax image={require("assets/img/bg4.jpg")}>
            <div className={classesLink.container}>
              <GridContainer>
                <GridItem>
                  <div className={classesLink.brand}>
                    <h1 className={classesLink.title}>ClickalMedic</h1>
                    <h3 className={classesLink.subtitle}>
                      Medicina en un click.
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>

          </Parallax>
          <div>
            <Header
              color="transparent"
              routes={dashboardRoutes}
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
            />
            <Parallax filter image={require("assets/img/landing-bg.jpg")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.title}>Your Story Starts With Us.</h1>
                    <h4>
                      Every landing page needs a small description after the big bold
                      title, that{"'"}s why we added this text here. Add here all the
                      information that can make you or your product create the first
                      impression.
                    </h4>
                    <br />
                    <Button
                      color="danger"
                      size="lg"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Watch video
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <ProductSection />
                <TeamSection />
                <WorkSection />
              </div>
            </div>
            <Footer />
          </div>

      </div>

    );
  }
