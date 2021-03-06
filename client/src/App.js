import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavDrawer from "./components/NavDrawer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Pricing from "./components/pages/Pricing";
import Footer from "./components/Footer";
import QRForm from "./components/pages/QRForm";

const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	mainSpacing: {
		padding: theme.spacing(1),
		margin: theme.spacing(10, 1, 2, 1)
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<Router>
			<CssBaseline />
			<Container maxWidth="lg">
				<NavDrawer>
					<Container>
						<Grid container direction="row" className={classes.mainSpacing}>
							<Route exact path="/" component={Home} />
							<Route exact path="/About" component={About} />
							<Route exact path="/Contact" component={Contact} />
							<Route exact path="/Pricing" component={Pricing} />
							<Route exact path="/QRForm" component={QRForm} />
							<Footer />
						</Grid>
					</Container>
				</NavDrawer>
			</Container>
		</Router>
	);
};

export default App;

