import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";
import { useTypewriter } from "react-simple-typewriter";

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
    type: {
      display: "flex",
      alignItems: "center",
    },
    hi: {
      fontSize: "170%",
      fontWeight: "bolder",
    },
    paragraph: {
      paddingRight: "10%",
      fontWeight: "normal",
    },
    h4: {
      color: "purple",
      fontWeight: "bolder",
    },
    givenName: {
      fontWeight: "bold",
      fontSize: "180%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  const [text] = useTypewriter({
    words: [
      "Front End Developer",
      "Web3/Blockchain Developer",
      "Developer Advocate",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
  });

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
        <span className={classes.hi}>Hi, </span>My Name is{" "}
        <span itemProp="givenName" className={classes.givenName}>
          Bruce Wang
        </span>
      </Typography>
      <Box className={classes.type}>
        <Typography
          variant="h4"
          itemProp="disambiguatingDescription"
          component="h1"
          gutterBottom
        >
          I'm a&nbsp;
        </Typography>
        <Typography
          variant="h4"
          itemProp="disambiguatingDescription"
          component="h1"
          gutterBottom
        >
          {text}
        </Typography>
      </Box>
      <br />
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
        I specialize in developing and deploying responsive web
        applications/dApps cominbine with latest blockchain technologies.
        <br />
        <br />I enjoy solving complex problems, exploring new technology and
        providing sustainable, scalable solutions.
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
