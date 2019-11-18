import React, { useState } from "react";
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
	Toolbar,
	Typography,
	Grid
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EmailIcon from "@material-ui/icons/Email";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
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
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const navListArr = ["Home", "About", "Pricing", "Contact", "QRForm"];

	const routeLink = route => {
		switch (route) {
			case "Home":
				return `/`
			case "About":
				return `/${route}`
			case "Pricing":
				return `/${route}`
			case "QRForm":
				return `/${route}`
			case "Contact":
				return `/${route}`
		}
	}

	const navListSwitch = text => {
		switch (text) {
			case "Home":
				return <HomeIcon />
			case "About":
				return <InfoIcon />
			case "Pricing":
				return <MonetizationOnIcon />
			case "QRForm":
				return <ImportExportIcon />
			case "Contact":
				return <EmailIcon />
		}
	}

	const drawer = (
		<div>
			<div className={classes.toolbar} />
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
		</div >
	);

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>

						<Grid container>
							<Hidden xsDown>
								<Grid item sm={5} className={classes.logoPad}>
									<Typography variant="h6" noWrap>
										<Link to="/" className={classes.unlink}>TOQR</Link>
									</Typography>
								</Grid>
							</Hidden>
						</Grid>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label="mailbox folders">
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							anchor={theme.direction === "rtl" ? "right" : "left"}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				{props.children}
			</div>
		</Router>
	);
};
export default NavDrawer;
