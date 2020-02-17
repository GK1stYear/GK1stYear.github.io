import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/hackathon.jpg";
import team2 from "assets/img/faces/open-data.jpg";
import team3 from "assets/img/faces/safehack.jpg";
import team4 from "assets/img/faces/stem.jpg";
import team5 from "assets/img/faces/opencampus.jpg";


const useStyles = makeStyles(styles);

export default function ActivitiesSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Activities</h1>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Hackathons
                <br />
                <small className={classes.smallTitle}>What are hackathons?</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                A hackathon is where like minded people to come up and solve business and socially-relevant solutions through Technological and Innovative means.
                At the end of the Hackathon, Most Viable Products (apps, websites, electronics systems, data visualizations, etc. are developed of which ignite new startups.) 
               <a href="https://www.geekulcha.com/hackathons">Read more</a> 
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Open Data Programmes
                <br />
                <small className={classes.smallTitle}>Whats is Open data?</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Open Data refers to data that is freely available, can be accessed, used and/or changed and republished by anyone.
                 <a href="https://www.geekulcha.com/odisc">Read more</a> 
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                SafeHack: Cyber Security
                <br />
                <small className={classes.smallTitle}>What is Safe Hack?</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                SafeHack is the ability to encourage our hackers to consider their responsibilities in building something that is intrinsically safe from the beginning, by doing so we are adding a Cyber Security awareness component into the hackathon
                <a href="https://www.geekulcha.com/safehack">Read More</a> 
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                SkateHacks for STEM
                <br />
                <small className={classes.smallTitle}>What are SkateHacks?</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                SkateHacks is an initiative by the Northern Cape Department of Economic Development and Tourism (DeDaT) and Geekulcha - Sports Science Workshops and Maker/Developer activities are organized for STEM stimulation.
                This in efforts to encourage youngsters to follow Science and Technology careers and be involved in building inclusive social-relevant solutions.
               <a href="https://www.geekulcha.com/skatehacks">Read More</a> 
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Open Campus
                <br />
                <small className={classes.smallTitle}>What is Open Campus?</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Open Campus is a GKSS programme to enable mass access to technological resources and tools, promote open innovation and elevate collaboration economy in the Northern Cape.
                The meetup events will be hosted at various campuses for students in Kimberley. Students will connect, learn, share and help each other grow with each other's skills/knowledge.
                <a href="http://opencampus.ncdev.co.za/">Read More</a> 
                </p>
              </CardBody>
            </Card>
          </GridItem>
          </GridContainer>
          </div>
          </div>
  );
  }
