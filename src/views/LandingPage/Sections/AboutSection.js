import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
        <h1 className={classes.description}>
          ABOUT
          </h1>
          <h2 className={classes.description}>
            The Geekulcha 1st Year platform is created to help support school
            learners on their first after high school. While building a Geek
            Culture Sustainable innovation, the organization seeks to guide the
            growth with skills and capacity that matters the most.
          </h2>
        </GridItem>
      </GridContainer>
     
    </div>
  );
}
