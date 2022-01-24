import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import img from '../../Images/logo.png';
import useStyles from './useStyles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { Person as ProfileIcon, Logout as LogoutIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { loggedInUser, logout } = useAuth();

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <AppBar
      position="static"
      style={{
        background: '#ffffff',
        boxShadow:
          '- 1px 9px 15px - 1px rgba(0, 0, 0, 0.2), 0px 10px 15px - 3px rgba(0, 0, 0, 0.1), 0px 10px 15px - 3px rgba(0, 0, 0, 0.1)',
        height: '4.2rem',
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/dashboard">
            <img src={img} className={classes.logoImg} alt="logo" />
          </Link>
        </Typography>
        {loggedInUser && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={{ color: '#f14140' }}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ProfileIcon fontSize="small" style={{ marginLeft: '7px' }} />
                </ListItemIcon>
                <ListItem className={classes.profileName} component={Link} to="/user/edit-profile">
                  Profile
                </ListItem>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" style={{ marginLeft: '9px' }} />
                </ListItemIcon>
                <ListItemText className={classes.logoutName}>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
