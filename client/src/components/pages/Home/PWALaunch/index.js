import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Typography,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardMedia
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(.5),
		margin: theme.spacing(0)
	},
	card: {
		width: "100%",
		height: "100%",
	},
	media: {
		height: "100%",
		width: "100%"
	}
}));

const PWALaunch = () => {
	const classes = useStyles();
	return (
		<Grid item xs={12} md={4} className={classes.root}>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia>
						<img
							src={"/assets/images/toqr-pwa-heroku.png"}
							className={classes.media}
							alt={"QR Code for Mobile Launch"}
						/>
					</CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2" align="center">
							Launch our Mobile App for more!
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default PWALaunch;
