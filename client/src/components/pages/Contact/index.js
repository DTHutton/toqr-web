// import React, { useState } from "react";
// import {
// 	fade,
// 	ThemeProvider,
// 	withStyles,
// 	makeStyles,
// 	createMuiTheme,
// } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// import Input from "@material-ui/core/Input"
// import FormHelperText from "@material-ui/core/FormHelperText"
// import InputLabel from '@material-ui/core/InputLabel';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import { green } from '@material-ui/core/colors';



// const useStyles = makeStyles(theme => ({
// 	root: {
// 		display: 'flex',
// 		flexWrap: 'wrap',
// 	},
// 	margin: {
// 		margin: theme.spacing(1),
// 	},
// }));

// const ValidationTextField = withStyles({
// 	root: {
// 		'& input:valid + fieldset': {
// 			borderColor: 'green',
// 			borderWidth: 2,
// 		},
// 		'& input:invalid + fieldset': {
// 			borderColor: 'red',
// 			borderWidth: 2,
// 		},
// 		'& input:valid:focus + fieldset': {
// 			borderLeftWidth: 6,
// 			padding: '4px !important', // override inline-style
// 		},
// 	},
// })(TextField);

// const theme = createMuiTheme({
// 	palette: {
// 		primary: green,
// 	},
// });


// const Contact = props => {
// 	const classes = useStyles();

// 	return (
// 		<div>
// 			<FormControl>
// 				<InputLabel htmlFor="my-input">Email address</InputLabel>
// 				<Input id="my-input" aria-describedby="my-helper-text" />
// 				<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
// 			</FormControl>
// 			<FormControl>
// 				<ValidationTextField
// 					className={classes.margin}
// 					label="CSS validation style"
// 					required
// 					variant="outlined"
// 					defaultValue="Success"
// 					id="validation-outlined-input"
// 				/>
// 			</FormControl>
// 			<FormControl>
// 				<TextField
// 					required
// 					id="filled-required"
// 					label="Required"
// 					defaultValue="Hello World"
// 					className={classes.textField}
// 					margin="normal"
// 					variant="filled"
// 				/>
// 			</FormControl>

// 		</div>
// 	)
// }

// export default Contact;


import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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