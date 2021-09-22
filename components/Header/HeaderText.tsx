import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      fontSize: "170%",
      fontWeight:"bolder",
    },
    paragraph: {
      paddingRight: "30%",
      fontFamily: "Arial",
      fontWeight: "normal"
    },
    h4: {
      color: "purple",
      fontWeight: "bolder",
    },
    givenName: {
      fontWeight: "bold",
      fontSize: "220%",
    }
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Wang" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Bruce Wang" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <span itemProp="givenName" className={classes.givenName}>Bruce Wang</span>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A Frontend Developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        I specialize in developing and deploying responsive websites and web
        applications.<br />
        I enjoy solving complex problems, and providing sustainable, scalable solutions.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
