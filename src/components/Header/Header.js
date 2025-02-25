import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import FlatwareIcon from '@mui/icons-material/Flatware';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <IconButton color="black" onClick={() => navigate('/filters')}>
          <FilterAltIcon fontSize="medium" />
        </IconButton>
        <IconButton color="black" onClick={() => navigate('/')}>
          <FlatwareIcon fontSize="medium" />
        </IconButton>
        <IconButton color="black" onClick={() => navigate('/library')}>
          <BookmarksIcon fontSize="medium" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;