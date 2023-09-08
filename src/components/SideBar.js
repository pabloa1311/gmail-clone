import React from "react";
import "../styles/SideBar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';


function SideBar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon fontSize="large"  />} className="sidebar__compose">Compose</Button>

      <SidebarOption Icon={InboxIcon} title={"Inbox"} number={54} selected={true}/>
      <SidebarOption Icon={StarBorderIcon} title={"Starred"} number={54} />
      <SidebarOption Icon={AccessTimeIcon} title={"Snoozed"} number={54} />
      <SidebarOption Icon={LabelImportantIcon} title={"Important"} number={54} />
      <SidebarOption Icon={SendOutlinedIcon} title={"Sent"} number={54} />
      <SidebarOption Icon={InsertDriveFileOutlinedIcon} title={"Drafts"} number={54} />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title={"More"}  />

      <div className="sidebar__footer">
        <div className="sidebar__footer">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
              <PhoneIcon />
            </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
