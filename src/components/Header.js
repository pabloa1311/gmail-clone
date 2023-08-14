import React from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import logoGmail from "../images/logo_gmail.jpg"
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
            <MenuIcon />
        </IconButton>
        <img src={logoGmail} alt="Logo of Gmail" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCarel" />
      </div>
      <div className="header__right">
        <IconButton>
            <AppsIcon />
        </IconButton>
        
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
