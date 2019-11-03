// import React, { useState } from "react";
// import { withStyles } from '@material-ui/core/styles';
// import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
// import { AccountCircle, Settings, ExitToApp } from "@material-ui/icons"

// const StyledMenu = withStyles({
//     paper: {
//         border: '1px solid #d3d4d5',
//     },
// })(props => (
//     <Menu
//         elevation={0}
//         getContentAnchorEl={null}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//         }}
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//         }}
//         {...props}
//     />
// ));

// const StyledMenuItem = withStyles(theme => ({
//     root: {
//         '&:focus': {
//             backgroundColor: theme.palette.primary.main,
//             '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//                 color: theme.palette.common.white,
//             },
//         },
//     },
// }))(MenuItem);

// const NavMenu = () => {
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleClick = event => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div>
//             <Button
//                 aria-controls="customized-menu"
//                 aria-haspopup="true"
//                 variant="contained"
//                 color="primary"
//                 onClick={handleClick}
//             >
//                 Account
//             </Button>
//             <StyledMenu
//                 id="customized-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <StyledMenuItem>
//                     <ListItemIcon>
//                         <AccountCircle fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Profile" />
//                 </StyledMenuItem>
//                 <StyledMenuItem>
//                     <ListItemIcon>
//                         <Settings fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Settings" />
//                 </StyledMenuItem>
//                 <StyledMenuItem>
//                     <ListItemIcon>
//                         <ExitToApp fontSize="small" />
//                     </ListItemIcon>
//                     <ListItemText primary="Logout" />
//                 </StyledMenuItem>
//             </StyledMenu>
//         </div>
//     );
// }

// export default NavMenu;

// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         [theme.breakpoints.up('sm')]: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//     },
//     appBar: {
//         [theme.breakpoints.up('sm')]: {
//             width: `calc(100% - ${drawerWidth}px)`,
//             marginLeft: drawerWidth,
//         },
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up('sm')]: {
//             display: 'none',
//         },
//     },
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));

// const NavMenu = props => {
//     const { container } = props;
//     const classes = useStyles();
//     const theme = useTheme();
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };

//     const drawer = (
//         <div>
//             <div className={classes.toolbar} />
//             <Divider />
//             <List>
//                 {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />
//             <List>
//                 {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                     <ListItem button key={text}>
//                         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>
//         </div>
//     );

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar position="fixed" className={classes.appBar}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         className={classes.menuButton}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap>
//                         Responsive drawer
//           </Typography>
//                 </Toolbar>
//             </AppBar>
//             <nav className={classes.drawer} aria-label="mailbox folders">
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Hidden smUp implementation="css">
//                     <Drawer
//                         container={container}
//                         variant="temporary"
//                         anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                         ModalProps={{
//                             keepMounted: true, // Better open performance on mobile.
//                         }}
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Hidden>
//                 <Hidden xsDown implementation="css">
//                     <Drawer
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                         variant="permanent"
//                         open
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Hidden>
//             </nav>
//         </div>
//     )
// }
// export default NavMenu;