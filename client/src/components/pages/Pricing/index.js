import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box, Paper } from "@material-ui/core";
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
	paperRoot: {
		padding: theme.spacing(3, 2),
	}
}));

const Pricing = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => setValue(newValue);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
					<Tab label="Free" icon={<MoneyOffIcon />} {...allyProps(0)} />
					<Tab label="Basic" icon={<AttachMoneyIcon />} {...allyProps(1)} />
					<Tab label="Premium" icon={<AttachMoneyIcon />} {...allyProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Paper className={classes.paperRoot}>
					<Typography variant="h5" component="h3">
						Free Tier
      				</Typography>
					<Typography component="p">
						Description of what comes with this pricing tier.
      				</Typography>
				</Paper>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Paper className={classes.paperRoot}>
					<Typography variant="h5" component="h3">
						Basic Tier
					</Typography>
					<Typography component="p">
						Description of what comes with this pricing tier.
      				</Typography>
				</Paper>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Paper className={classes.paperRoot}>
					<Typography variant="h5" component="h3">
						Premium Tier
      				</Typography>
					<Typography component="p">
						Description of what comes with this pricing tier.
      				</Typography>
				</Paper>
			</TabPanel>
		</div>
	);
};

export default Pricing;