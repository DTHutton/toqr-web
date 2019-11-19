import React, { useState } from "react";
import TopBarNav from "./TopBarNav";
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EmailIcon from "@material-ui/icons/Email";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			marginLeft: drawerWidth,
			zIndex: theme.zIndex.drawer + 1,
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	list: {
		width: 250,
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	unlink: {
		textDecoration: "none",
		color: "inherit"
	},
	title: {
		textAlign: "center"
	},
	logoPad: {
		paddingLeft: "45px"
	}
}));

const NavDrawer = props => {
	const classes = useStyles();
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const navListArr = ["Home", "Pricing", "QRForm", "Contact", "About"];

	const routeLink = route => {
		switch (route) {
		case "Home":
			return "/";
		case "About":
			return `/${route}`;
		case "Pricing":
			return `/${route}`;
		case "QRForm":
			return `/${route}`;
		case "Contact":
			return `/${route}`;
		}
	};

	const navListSwitch = text => {
		switch (text) {
		case "Home":
			return <HomeIcon />;
		case "About":
			return <InfoIcon />;
		case "Pricing":
			return <MonetizationOnIcon />;
		case "QRForm":
			return <ImportExportIcon />;
		case "Contact":
			return <EmailIcon />;
		}
	};

	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<Divider />
			<List>
				{navListArr.map(text => (
					<Link to={routeLink(text)} className={classes.unlink} key={text}>
						<ListItem button key={text}>
							<ListItemIcon>
								{navListSwitch(text)}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<Hidden mdUp>
					<AppBar position="fixed" className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={toggleDrawer("left", true)}
								className={classes.menuButton}
							>
								<MenuIcon />
							</IconButton>
						</Toolbar>
					</AppBar>

					<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
						{sideList("left")}
					</Drawer>
				</Hidden>

				<Hidden smDown>
					<TopBarNav />
				</Hidden>
				{props.children}
			</div>
		</Router>
	);
};

export default NavDrawer;
