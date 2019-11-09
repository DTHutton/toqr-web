import React, { Fragment } from "react";
import {
	CssBaseline,
	Grid,
	Typography,
	Link,
	Container,
	Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	"@global": {
		ul: {
			margin: 0,
			padding: 0,
		},
		li: {
			listStyle: "none",
		},
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));

const footers = [
	{
		title: "Company",
		description: ["Team", "History", "Contact us", "Locations"],
	},
	{
		title: "Features",
		description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"],
	},
	{
		title: "Resources",
		description: ["Resource", "Resource name", "Another resource", "Final resource"],
	},
	{
		title: "Legal",
		description: ["Privacy policy", "Terms of use"],
	},
];

const Footer = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<CssBaseline />
			{/* Footer */}
			<Container maxWidth="md" component="footer" className={classes.footer}>
				<Grid container spacing={4} justify="space-evenly">
					{footers.map(footer => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography variant="h6" color="textPrimary" gutterBottom>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map(item => (
									<li key={item}>
										<Link href="#" variant="subtitle1" color="textSecondary">
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
			{/* End footer */}
		</Fragment>
	);
};

export default Footer;