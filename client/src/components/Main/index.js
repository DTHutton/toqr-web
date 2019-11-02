import React from "react";
import About from "./About";
import PWALaunch from "./PWALaunch"
import { Grid } from "@material-ui/core";

const Main = () => {
    return (
        <Grid container direction="row" justify="center">
            <PWALaunch />
            <About />
        </Grid>
    )
};

export default Main;
