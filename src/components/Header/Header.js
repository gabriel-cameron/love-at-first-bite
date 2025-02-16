import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import FlatwareIcon from '@mui/icons-material/Flatware';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <IconButton color="black">
          <FlatwareIcon fontSize="large" />
        </IconButton>
        <IconButton color="black">
          <FilterAltIcon fontSize="large" />
        </IconButton>
        <IconButton color="black">
          <LibraryBooksIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
