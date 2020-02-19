import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button } from 'reactstrap';
//import { Component } from "react";

//import { Component } from "react";
//import BackToTop from "react-back-to-top";


import AboutSection from "./Sections/AboutSection.js";
import ActivitiesSection from "./Sections/ActivitiesSection.js";
import JoinSection from "./Sections/JoinSection.";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
//import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import  goUpNarrrowImage from "assets/img/faces/goUpNarrrowImage.jpg";

// Sections for this page
//import ProductSection from "./Sections/ProductSection.js";
//import TeamSection from "./Sections/TeamSection.js";
//import WorkSection from "./Sections/WorkSection.js";
//import WorkSection from "../../../gk1styear.github.io/src/views/LandingPage/Sections/WorkSection.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
 
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="GK1stYear"
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
              <h1 className={classes.title}>Geekulcha 1st Year Platform</h1>
              
              <br />

             <a href="#about" class="hbtn btn btn-danger" >About</a>
             <a href="#activities"  class="hbtn btn btn-danger" >Activities</a>
             <a href="#join" class="hbtn btn btn-danger">Join</a>
                                                                                                                                                               
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div id="about"></div>
          <AboutSection/>

          <div id="activities"></div>
          <ActivitiesSection />

          <div id="join"></div>
          <JoinSection />
          
          
        </div>
      </div>
        </div>
  );
}
