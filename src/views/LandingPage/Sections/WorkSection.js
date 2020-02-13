import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our top 15 Inspirational Geeks</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Mpho Jan Kubeka
                <br />
                <small className={classes.smallTitle}>Founder of Kubeka Advanced Industries</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                A 20 year old entrepreneur and data science student at the EXPLORE DATA SCIENCE ACADEMY hailing from Evaton North (Vaal Triangle). 
                He is passionate about Artificial Intelligence, Big Data and their capabilities to deliver real change for average human life. 
                 <a href="https://geekulcha.com/young-geeks.php">Read more</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Sewagodimo Matlapeng
                <br />
                <small className={classes.smallTitle}>Software Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Sewagodimo is a software engineer, half marathon runner and tech Youtuber. 
                She started programming at 16 years old, she has since graduated with a Bsc(Hons) 
                in Computer Science and 3D Gaming from UCT. She now works as a software engineer for PRAEKELT.org, 
                she is also the lead for Developer Circles Cape Town and editor for Indoni Space Digital Magazine 
                (dedicated to celebrating Black Women Developers).
                 <a href="https://geekulcha.com/young-geeks.php">Read more</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Ofentswe Lebogo
                <br />
                <small className={classes.smallTitle}>Co-Founder and CTO</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Co-Founder and CTO of Datawizzards where they are building cool machine learning 
                products using tensorflow as their primary tool for training models and making predictions. 
                In the next five years he's planning to be building more disruptive machine learning products that
                 will be using Data to drive our society at large.
                 <a href="https://geekulcha.com/young-geeks.php">Read More</a> 
                </p>              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Sifiso Nkabinde
                <br />
                <small className={classes.smallTitle}> 15 Year Old Coder</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                He's a 15 years old software developer from Johannesburg. Sifiso started programming at the
                 of age 10 after an introduction at the Sci-Bono Clubhouse since then, he developed an interest
                  in 3D design, Robotics and Software development. After a couple of months of practice, he created
                   demos such as an Android Weather App as a test of his skill, later a chat application finally a 
                   ride-hailing app he named Travel.
                 <a href="https://geekulcha.com/young-geeks.php">Read More</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Tshireletso Kgabi
                <br />
                <small className={classes.smallTitle}> Cyber Security Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                First in South Africa and Africa to be a CyberArk Delivery Engineer. 
                The youngest female Technical security lady in PAM. Experienced Cyber 
                Security Engineer with a demonstrated history of working in the computer 
                and network security industry and bank industry.
                <a href="https://geekulcha.com/young-geeks.php">Read More</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>  
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Kamogelo Charmaine Thebe
                <br />
                <small className={classes.smallTitle}>Junior Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                She's a Junior Software Developer, GirlCode Volunteer and a youtuber(recently created her channel). 
                She studied Computer Systems Engineering at the Vaal University of technology. 
                She wants to be an expert at what she does so that she can be able to start an NPO that will 
                get more disadvantaged kids into tech and coding. Kamagelo would also like to have some of her 
                projects published and be used 
                <a href="https://geekulcha.com/young-geeks.php">Read More</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>   
        </GridContainer>
      </div>
    </div>
  );
}
