import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/1.png';
import { Drawer, Menu, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import PollIcon from '@mui/icons-material/Poll';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { logoutUser } = useContext(UserContext)

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#070734' }}>
        <Toolbar>
          {/* Menu Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Link to="/home"><Box
            component="img"
            sx={{
              height: 64,
              display: { xs: 'block', sm: 'block' },
            }}
            alt="Your logo."
            src={Logo}
          /></Link>

          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Geek School Dashboard
          </Typography>



          {/* Profile Menu */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>

          {/* Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}><Link to="/profile">Profile</Link></MenuItem>
            <MenuItem onClick={logoutUser}><Link to="/">Logout</Link></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#e3f2fd',
            padding: '10px',
            borderRight: '1px solid #1976d2',
          },
        }}
      >
        <Box role="presentation" onClick={handleDrawerToggle}>
          <Typography variant="h6" gutterBottom sx={{ padding: '16px' }}>
            Navigation
          </Typography>
          <List>
            <Link to={'/home'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={'/profile'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={'/events'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={'/faq'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={'/settings'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={'/poll'}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PollIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quick Poll" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
