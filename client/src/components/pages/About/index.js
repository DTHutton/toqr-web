import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2, 2),
		margin: theme.spacing(1, 1),
		height: "100%",
		width: "100%"
	},
	heroContent: {
		padding: theme.spacing(2, 0, 6),
	}
}));

const About = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Container component="main" className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					About Us
				</Typography>
			</Container>

			<Container>
				<Grid item xs={12}>
					<Paper className={classes.root}>
						<Typography variant="h5" component="h3">
							This is the about section.
						</Typography>

						<Typography component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Nulla aliquet porttitor lacus luctus. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Maecenas accumsan lacus vel facilisis volutpat est. Tortor dignissim convallis aenean et tortor at risus viverra. Viverra accumsan in nisl nisi scelerisque eu. Magna eget est lorem ipsum dolor sit amet consectetur. Vivamus arcu felis bibendum ut tristique. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Nec feugiat in fermentum posuere urna nec tincidunt.
						</Typography>

						<Typography component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Nulla aliquet porttitor lacus luctus. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Maecenas accumsan lacus vel facilisis volutpat est. Tortor dignissim convallis aenean et tortor at risus viverra. Viverra accumsan in nisl nisi scelerisque eu. Magna eget est lorem ipsum dolor sit amet consectetur. Vivamus arcu felis bibendum ut tristique. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Nec feugiat in fermentum posuere urna nec tincidunt.
						</Typography>
					</Paper>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default About;
