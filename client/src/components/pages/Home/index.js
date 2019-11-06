import React from "react";
import { Grid } from "@material-ui/core";
import SalesPitch from "./SalesPitch";
import PWALaunch from "./PWALaunch";

const Home = props => {
	return (
		<div>
			<Grid container direction="row">
				<PWALaunch />
				<SalesPitch />
			</Grid>
		</div>
	);
};

export default Home;