// import React, { useState } from "react";
// import { Menu, MenuItem, Button } from "@material-ui/core";

// const NavMenu = props => {

//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleClick = event => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     }
//     return (
//         <div>
//             <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                 Account
//             </Button>
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem> 
//                 <MenuItem onClick={handleClose}>Settings</MenuItem>
//                 <MenuItem onClick={handleClose}>Logout</MenuItem>
//             </Menu>
//         </div>
//     )
// }

// export default NavMenu;


// AccountCircle
// Settings
// ExitToApp


import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { AccountCircle, Settings, ExitToApp } from "@material-ui/icons"

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Account
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

export default NavMenu;