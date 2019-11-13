import React, { useState } from "react";
import {
	Grid,
	Typography,
	TextField,
	Paper,
	Container,
	Divider,
	Button
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(3, 2),
		backgroundColor: theme.palette.background.paper
	},
	heroContent: {
		padding: theme.spacing(2, 0, 6)
	},
	divideMargin: {
		marginBottom: "10px"
	},
	button: {
		margin: theme.spacing(1),
	}
}));

const Contact = () => {
	const classes = useStyles();

	const defaultState = {
		firstName: "",
		lastName: "",
		email: "",
		message: ""
	};

	const [state, setState] = useState(defaultState);

	const { firstName, lastName, email, message } = state;

	const handleChange = e => {
		const { name, value } = e.target;
		setState(prevState => ({
			...prevState,
			[name]: value
		}))
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("contact form data: ", { firstName, lastName, email, message })
		setState(defaultState);
	}

	return (
		<Container maxWidth="lg">
			<Paper className={classes.paper}>
				<Container maxWidth="sm" component="main" className={classes.heroContent}>
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
						Contact Us
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" component="p">
						Have questions about our product? Let us know!
					</Typography>
				</Container>
				<Divider className={classes.divideMargin} />
				<form onSubmit={handleSubmit}>
					<Container>
						<Grid container spacing={3}>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									id="firstName"
									name="firstName"
									value={firstName}
									onChange={handleChange}
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
									value={lastName}
									onChange={handleChange}
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
									value={email}
									onChange={handleChange}
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
									value={message}
									onChange={handleChange}
									autoComplete="message"
									multiline={true}
									rows={4}
									rowsMax={4}
								/>
							</Grid>
						</Grid>
					</Container>
					<Container>
						<Grid>
							<Button
								variant="contained"
								color="primary"
								type="submit"
								className={classes.button}
								endIcon={<SendIcon />}
							>
								Send
							</Button>
						</Grid>
					</Container>
				</form>
			</Paper>
		</Container>
	);
};

export default Contact;