import { Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import { ManageStatus } from "./Status";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "183px",
    height: "210px",
    top: "100px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "& svg": { marginRight: theme.spacing(2) },
  ontSize: "14px",
  marginLeft: "10px",
}));

const menuItems = [
  "To Do",
  "Query",
  "Revision",
  "Finished",
  "Add New",
  "Manage Status",
];

const Todo = ({ handleShowToDo, anchorEl, handleMenuClose }) => {
  const [showStatus, setShowStatus] = useState(false);

  const handleShowStatus = () => {
    setShowStatus((prevShowStatus) => !prevShowStatus);
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
        {menuItems.map((item, index) => (
          <StyledMenuItem key={index} onClick={handleMenuClose}>
            <input type="checkbox" />
            {item}
          </StyledMenuItem>
        ))}
      </StyledMenu>
      {showStatus && (
        <ManageStatus
          handleShowStatus={handleShowStatus}
          handleShowToDo={handleShowToDo}
        />
      )}
    </>
  );
};

export default Todo;
