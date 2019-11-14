import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2, 2),
		margin: theme.spacing(1, 1),
		height: "100%",
		width: "100%"
	},
	subtitle: {
		textAlign: "center"
	}
}));

const SalesPitch = () => {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={8}>
			<Paper className={classes.root}>
				<Typography variant="h5" component="h3" className={classes.subtitle}>
					Who benefits from our services?
				</Typography>
				<Divider />
				<Typography variant="subtitle1" gutterBottom>
					Retailers.
				</Typography>

				<Typography variant="body1" gutterBottom>
					We offer a simple way to get detailed information to customers about your products and services or trying to train new employees on your store's intricacies while giving them a tour of the facilities.
				</Typography>

				<Typography variant="subtitle1" gutterBottom>
					School Campuses.
				</Typography>

				<Typography variant="body1" gutterBottom>
					We provide an easy way to offer students and parents a closer look at your school's facilities and goals when it comes to educating future generations.
				</Typography>

				<Typography variant="subtitle1" gutterBottom>
					National Parks.
				</Typography>

				<Typography variant="body1" gutterBottom>
					Education outreach is an important way our National Parks system keeps new generations of Americans informed about the natural world around them. Placing our codes throughout the park offers additional insight into mother nature with just a quick scan.
				</Typography>

			</Paper>
		</Grid>
	);
};

export default SalesPitch;
