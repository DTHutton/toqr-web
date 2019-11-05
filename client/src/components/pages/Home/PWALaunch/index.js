import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(1)
    },
    card: {
        width: "100%",
        height: "100%",
    },
    media: {
        height: 400,
        // width: 300
    }
}));

const PWALaunch = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/assets/images/frame.png"
                        title="QR Code for Mobile Launch"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            Launch our Mobile App for more!
                            </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default PWALaunch
