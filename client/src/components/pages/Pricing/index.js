import React, { Fragment } from "react";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CssBaseline,
	Grid,
	Typography,
	Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
	heroContent: {
		padding: theme.spacing(2, 0, 6),
	},
	cardHeader: {
		backgroundColor: theme.palette.grey[200],
	},
	cardPricing: {
		display: "flex",
		justifyContent: "center",
		alignItems: "baseline",
		marginBottom: theme.spacing(2),
	}
}));

const tiers = [
	{
		title: "Free",
		price: "0",
		description: [
			"10 users included",
			"2 GB of storage",
			"Help center access",
			"Email support"
		],
		buttonText: "Sign up for free",
		buttonVariant: "outlined",
	},
	{
		title: "Pro",
		price: "15",
		description: [
			"20 users included",
			"10 GB of storage",
			"Help center access",
			"Priority email support",
		],
		buttonText: "Get started",
		buttonVariant: "outlined",
	},
	{
		title: "Enterprise",
		price: "30",
		description: [
			"50 users included",
			"30 GB of storage",
			"Help center access",
			"Phone & email support",
		],
		buttonText: "Contact us",
		buttonVariant: "outlined",
	},
];

const Pricing = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<CssBaseline />
			{/* Hero unit */}
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Pricing
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" component="p">
					We can build a customized pricing package to suit your needs or you can try one of our template packages.
				</Typography>
			</Container>
			{/* End hero unit */}
			{/* Pricing unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map(tier => (
						// Enterprise card is full width at sm breakpoint
						<Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: "center" }}
									subheaderTypographyProps={{ align: "center" }}
									className={classes.cardHeader}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography component="h2" variant="h3" color="textPrimary">
											${tier.price}
										</Typography>
										<Typography variant="h6" color="textSecondary">
											/mo
										</Typography>
									</div>
									<ul>
										{tier.description.map(line => (
											<Typography component="li" variant="subtitle1" align="center" key={line}>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button 
									fullWidth 
									variant={tier.buttonVariant} 
									color="primary"
									onClick={() => alert(tier.buttonText)}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			{/* End Pricing unit */}

		</Fragment>
	);
};

export default Pricing;