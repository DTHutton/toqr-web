import React, { Fragment } from 'react';
import {
	Grid,
	Typography,
	TextField,
	Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
	},
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Paper className={classes.root}>
				<Typography variant="h6" gutterBottom>
					Contact Us
      		</Typography>
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
		</Fragment>
	);
}

export default Contact;