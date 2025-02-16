import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import FlatwareIcon from '@mui/icons-material/Flatware';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <IconButton color="primary">
          <FlatwareIcon />
        </IconButton>
        <IconButton color="primary">
          <FilterAltIcon />
        </IconButton>
        <IconButton color="primary">
          <LibraryBooksIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
