import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NavMenu from "./NavMenu";

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Stuff and Things
                    </Typography>
                    <NavMenu />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
