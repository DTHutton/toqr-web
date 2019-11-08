import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";

const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const allyProps = index => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Pricing = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => setValue(newValue);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Free" {...allyProps(0)} />
					<Tab label="Basic" {...allyProps(1)} />
					<Tab label="Premium" {...allyProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</div>
	);
};

export default Pricing;