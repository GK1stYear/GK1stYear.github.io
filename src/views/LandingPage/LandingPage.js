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


             <a href="#about" color= "secondary" >About</a>
             <a href="#activities" color= "secondary" >Activities</a>
             <a href="#join" color= "secondary" >Join</a>
             

              <Button color= "secondary" size="lg">Join</Button>
              <ScrollToTop showUnder={160}>
              <span>UP</span>
               </ScrollToTop>                                                                                                                                               
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

      <main class="padding-y-xl">
<div class="container max-width-adaptive-sm margin-bottom-lg">
<div class="text-component text-center">
<h1 class="text-xxxl">1st Year Initave Programmes</h1>
<p class="text-md">👇 Scroll down to see what we got for you</p>
<p><a href="https://codyhouse.co/tutorials/how-stacking-cards" class="btn btn--primary">Article &amp; Download</a></p>
</div>
</div>
<div class="container max-width-adaptive-md margin-bottom-lg">
<ul class="stack-cards js-stack-cards">
<li data-theme="default" class="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
<div class="grid">
<div class="col-6 flex items-center height-100%">
<div class="text-component padding-md ">
<h2>Card One</h2>
<p class="display@xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p><a href="#0" class="btn btn--accent">Read more</a></p>
</div>
</div>
<div class="col-6 height-100%">
<img class="block width-100% height-100% object-cover" src={'https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg'} alt="Image description"/>
</div>
</div>
</li>
<li data-theme="default" class="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
<div class="grid">
<div class="col-6 flex items-center height-100%">
<div class="text-component padding-md ">
<h2>Card Two</h2>
<p class="display@xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<p><a href="#0" class="btn btn--accent">Read more</a></p>
</div>
</div>
<div class="col-6 height-100%">
<img class="block width-100% height-100% object-cover" src={"https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"} alt="Image description"/>
</div>
</div>
</li>
<li data-theme="default" class="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
<div class="grid">
<div class="col-6 flex items-center height-100%">
<div class="text-component padding-md ">
<h2>Card Three</h2>
<p class="display@xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 <p><a href="#0" class="btn btn--accent">Read more</a></p>
</div>
</div>
<div class="col-6 height-100%">
<img class="block width-100% height-100% object-cover" src={"https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg"} alt="Image description"/>
</div>
</div>
</li>
</ul>
</div>
<div class="container max-width-adaptive-sm">
<div class="text-component line-height-lg v-space-md">
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque, rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus inventore.</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore? Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam necessitatibus quod natus, dolor laboriosam illo velit.</p>
</div>
</div>
</main>
<script src="assets/js/scripts.js"></script>
<div class="demo-avd demo-avd-cf demo-avd-cf--top-mb demo-avd--dark js-demo-avd" ></div>
<script src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/js/demo-avd.js"></script>

        </div>
  );
}
