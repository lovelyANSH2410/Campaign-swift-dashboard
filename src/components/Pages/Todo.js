import { Menu, MenuItem, Popover, styled } from "@mui/material";
import React, { useState } from "react";
import { ManageStatus } from "./Status";
import { Icon } from "@iconify/react/dist/iconify.js";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "183px",
    height: "210px",
    overflowY: "auto",
    padding:"0px 10px",
    zIndex: 8,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "& svg": { marginRight: theme.spacing(1)},
  fontSize: "14px",
  borderRadius:"5px"
}));

const Todo = ({ handleShowToDo, anchorEl, handleMenuClose }) => {
  const [showStatus, setShowStatus] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  const handleShowStatus = (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setShowStatus((prevShowStatus) => !prevShowStatus);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
    setShowStatus(false);
  };

  return (
    <>
      <StyledMenu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 47, left: 1332 }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <StyledMenuItem onClick={handleMenuClose}>
          <Icon
            icon="zondicons:exclamation-outline"
            width="15"
            height="15"
            style={{ color: "gray" }}
          />
          To Do
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <Icon
            icon="zondicons:exclamation-outline"
            width="15"
            height="15"
            style={{ color: "gray" }}
          />
          Query
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <Icon
            icon="zondicons:exclamation-outline"
            width="15"
            height="15"
            style={{ color: "gray" }}
          />
          Revision
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>
          <Icon
            icon="zondicons:exclamation-outline"
            width="15"
            height="15"
            style={{ color: "gray" }}
          />
          Finished
        </StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose} style={{backgroundColor:"#f4f4f4"}}>
          <Icon
            icon="solar:add-square-outline"
            width="15"
            height="15"
            style={{ color: "gray" }}
          />
          Add New
        </StyledMenuItem>
        <StyledMenuItem onClick={handleShowStatus}>
          <Icon
            icon="mage:edit-pen"
            width="15"
            height="15"
            style={{ color: "gray" }}
          />
          Manage Status
        </StyledMenuItem>
      </StyledMenu>
      <Popover
        open={popoverAnchorEl}
        anchorEl={popoverAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ManageStatus
          handleShowStatus={handlePopoverClose}
          handleShowToDo={handleShowToDo}
        />
      </Popover>
    </>
  );
};

export default Todo;
