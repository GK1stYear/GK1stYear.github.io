import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import { Button } from 'reactstrap';
//import { Component } from "react";
import Faq from 'react-faq-component';

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
import team6 from "assets/img/faces/women.jpg";

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
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "Why should i be part of this programme?",
        content: `If you're looking for a way to kick-start your career and if you want to be exposed to technology, this would be a great opportunity for you!`
      },
      {
        title: "What will I gain?",
        content: "You'll gain more knowledge, get exposure, and take part of tech events specially tailored for first years."
      },
      {
        title: "How do i join?",
        content: "............."
      },
      {
        title: "What's next?",
        content: ".........."
      }]
  }
  const styles = {
    // bgColor: 'white',
    titleTextColor: 'black',
    rowTitleColor: 'black',
    // rowContentColor: 'grey'
  }
  
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
      <div>
        <Faq data={data} styles={styles}/>
      </div>

      <main class="padding-y-xl">
<div class="container max-width-adaptive-sm margin-bottom-lg">
<div class="text-component text-center">
<p class="text-md">👇 Scroll down to see what we got for you</p>
</div>
</div>
<div class="container max-width-adaptive-md margin-bottom-lg">
<ul class="stack-cards js-stack-cards">
<li data-theme="default" class="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
<div class="grid">
<div class="col-6 flex items-center height-100%">
<div class="text-component padding-md ">
<h2>Sorry this is for first years only!!!</h2>
<p class="display@xs">First year student? This is the best platform to showcase your talent or work on what you have. Join us today!! Don't miss this opportunity</p>
</div>
</div>
<div class="col-6 height-100%">
<img class="block width-100% height-100% object-cover" img src={team6} alt="..." alt="Image description"/>
</div>
</div>
</li>
</ul>
</div>
</main>

        </div>
        
        
  );
}
