import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Grid } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import EmailIcon from '@material-ui/icons/Email';
const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Molly Omens" icon={<ImportContactsIcon />} />
                        <BottomNavigationAction label="Derek Hutton" icon={<ImportContactsIcon />} />
                        <BottomNavigationAction label="Contact" icon={<EmailIcon />} />
                        <BottomNavigationAction label="GitHub Repo" icon={<GitHub />} />
                    </BottomNavigation>
                </Grid>
                {/* <Grid item xs={6} align="right">
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Contact" icon={<EmailIcon />} />
                        <BottomNavigationAction label="GitHub Repo" icon={<GitHub />} />
                    </BottomNavigation>
                </Grid> */}
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
