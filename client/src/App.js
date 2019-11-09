import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavDrawer from "./components/NavDrawer";
import { Grid, CssBaseline } from "@material-ui/core";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Pricing from "./components/pages/Pricing";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white,
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
			<React.Fragment>
				<CssBaseline />
				<NavDrawer>
					<Grid container direction="row" className={classes.mainSpacing}>
						<Route exact path="/" component={Home} />
						<Route exact path="/About" component={About} />
						<Route exact path="/Contact" component={Contact} />
						<Route exact path="/Pricing" component={Pricing} />
					</Grid>
				</NavDrawer>
				<Footer />
			</React.Fragment>

		</Router>
	);
};

export default App;

