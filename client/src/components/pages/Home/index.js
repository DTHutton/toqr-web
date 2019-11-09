import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import SalesPitch from "./SalesPitch";
import PWALaunch from "./PWALaunch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
	},
	heroContent: {
		padding: theme.spacing(2, 0, 6),
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<div>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Welcome to TOQR!
				</Typography>
			</Container>
			<Grid container direction="row">
				<PWALaunch />
				<SalesPitch />
			</Grid>
		</div>
	);
};

export default Home;