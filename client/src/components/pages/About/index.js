import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	Typography,
	Grid,
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2, 2),
		margin: theme.spacing(1, 1),
		height: "100%",
		width: "100%"
	},
	heroContent: {
		padding: theme.spacing(2, 0, 6),
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	promoTitle: {
		paddingLeft: "40px"
	},
	promoLinks: {
		padding: theme.spacing(2),
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	unlink: {
		textDecoration: "none",
		color: "inherit"
	}
}));

const About = () => {
	const classes = useStyles();
	const handleClick = event => {
		event.preventDefault();
		window.location.assign("https://github.com/DTHutton");
	}

	return (
		<Fragment>
			<Router>
				<Paper className={classes.root}>
					<Container component="main" className={classes.heroContent}>
						<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							About Us
					</Typography>
					</Container>

					<Grid container>
						<Grid
							container
							direction="row"
							justify="space-evenly"
							alignItems="center"
						>
							<Grid item align="center" xs={6}>
								<Typography variant="h6">
									The TOQR Project
          					</Typography>
							</Grid>
							<Grid item className={classes.promoTitle} xs={3}>
								<Typography variant="h6">
									Derek Hutton
          					</Typography>
							</Grid>
							<Grid item className={classes.promoTitle} xs={3}>
								<Typography variant="h6">
									Molly Omens
          					</Typography>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Typography>
								TOQR Started as our final project for the UCF Coding Bootcamp. When we first began fleshing out the application, we had one goal in mind: To make a flexible framework for clients to easily disseminate information over a large area. We've learned a lot making this project and if anything, it's taught us that we still have a long way to go. Despite the long road ahead, we're proud to have put this together and we'll continue to bring the same pride and passion to all future projects.
						</Typography>

						</Grid>

						<Grid item xs={6}>
							<Grid container className={classes.promoLinks}>
								<Grid item xs={6}>
									<List>
										<Link
											rel="noopener"
											target="_blank"
											className={classes.unlink}
											onClick={handleClick}
										>
											<ListItem button>
												<ListItemIcon>
													<GitHubIcon />
												</ListItemIcon>
												<ListItemText primary="GitHub" />
											</ListItem>
										</Link>
										<Link
											rel="noopener"
											target="_blank"
											className={classes.unlink}
											onClick={handleClick}
										>
											<ListItem button>
												<ListItemIcon>
													<LinkedInIcon />
												</ListItemIcon>
												<ListItemText primary="LinkedIn" />
											</ListItem>
										</Link>
										<Link
											rel="noopener"
											target="_blank"
											className={classes.unlink}
											onClick={handleClick}
										>
											<ListItem button>
												<ListItemIcon>
													<CodeIcon />
												</ListItemIcon>
												<ListItemText primary="Portfolio" />
											</ListItem>
										</Link>
									</List>
								</Grid>

								<Grid item xs={6}>
									<List>
										<ListItem button>
											<ListItemIcon>
												<GitHubIcon />
											</ListItemIcon>
											<ListItemText primary="GitHub" />
										</ListItem>
										<ListItem button>
											<ListItemIcon>
												<LinkedInIcon />
											</ListItemIcon>
											<ListItemText primary="LinkedIn" />
										</ListItem>
										<ListItem button>
											<ListItemIcon>
												<CodeIcon />
											</ListItemIcon>
											<ListItemText primary="Portfolio" />
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Grid>

					</Grid>
				</Paper>
			</Router>
		</Fragment>
	);
};

export default About;
