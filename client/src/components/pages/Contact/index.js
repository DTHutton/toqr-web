import React, { Fragment } from "react";
import {
	Grid,
	Typography,
	TextField,
	Paper,
	Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
	},
	heroContent: {
		padding: theme.spacing(2, 0, 6),
	}
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Contact Us
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" component="p">
					Have questions about our product? Let us know! We&apos;re always happy to address any concerns!
				</Typography>
			</Container>
			<Container>
				<Paper className={classes.root}>
					{/* <Typography variant="h6" gutterBottom>
						Contact Us
				</Typography> */}
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								id="firstName"
								name="firstName"
								label="First name"
								fullWidth
								autoComplete="fname"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								id="lastName"
								name="lastName"
								label="Last name"
								fullWidth
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="message"
								label="Message"
								name="message"
								autoComplete="message"
								multiline={true}
								rows={4}
								rowsMax={4}
							/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default Contact;