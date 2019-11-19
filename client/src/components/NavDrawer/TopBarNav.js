import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			zIndex: theme.zIndex.drawer + 1,
		}
	}
}));

const TopBarNav = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Grid
						container
						direction="row"
						justify="space-around"
						alignItems="center"
					>
						{props.children}
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default TopBarNav;