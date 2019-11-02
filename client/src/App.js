import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Main />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
