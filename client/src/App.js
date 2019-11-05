import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavDrawer from "./components/NavDrawer";
import { Grid } from "@material-ui/core";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Pricing from "./components/pages/Pricing";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles(theme => ({
  mainSpacing: {
    padding: theme.spacing(1),
    margin: theme.spacing(10, 1, 2, 1)
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <NavDrawer>
        <Grid container direction="row" className={classes.mainSpacing}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pricing" component={Pricing} />
        </Grid>
      </NavDrawer>
    </Router>
  );
}

export default App;

