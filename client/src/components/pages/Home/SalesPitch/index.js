import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2, 2),
		margin: theme.spacing(1, 1),
		height: "100%",
		width: "100%"
	},
}));

const SalesPitch = () => {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={8}>
			<Paper className={classes.root}>
				<Typography variant="h5" component="h3">
				Who benefits from our services?
				</Typography>

				<Typography component="p">
                    Retailers. We offer a simple way to get detailed information to customers about your products and services or trying to train new employees on your store's intricacies while giving them a tour of the facilities.
				</Typography>

				<Typography component="p">
                    School Campuses. We provide an easy way to offer students and parents a closer look at your school's facilities and goals when it comes to educating future generations.
				</Typography>

				<Typography component="p">
                    National Parks. Education outreach is an important way our National Parks system keeps new generations of Americans informed about the natural world around them. Placing our codes throughout the park offers additional insight into mother nature with just a quick scan. 
				</Typography>

			</Paper>
		</Grid>
	);
};

export default SalesPitch;
