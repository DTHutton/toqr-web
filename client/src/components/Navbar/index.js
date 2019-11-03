import React from "react"
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import NavMenu from "./NavMenu";

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid item xs={9}>
                        <Typography variant="h5" component="h3" color="inherit">
                            Project Three: TourQR
                    </Typography>
                    </Grid>
                    <Grid item xs={3} align="right">
                        <NavMenu />
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
