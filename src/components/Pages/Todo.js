import { Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import { ManageStatus } from "./Status";

const TimeWrapper = styled("div")(({ theme }) => ({
  top: "47px",
  left: "1332px",
  width: "183px",
  height: "210px",
  padding: "5px",
  overflowY: "auto",
  position: "absolute",
  fontSize: "14px",
  backgroundColor: "white",
  border: "1px solid #ccc",
  color: "#6a6a6a",
  borderRadius: "4px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  zIndex: 10,
  msOverflowStyle: "none", // For Internet Explorer and Edge
  scrollbarWidth: "none", // For Firefox
  "&::-webkit-scrollbar": {
    // For Chrome, Safari, and Opera
    display: "none",
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "183px",
    height: "210px",
    top:"100px",
    overflowY: "auto",
    // Hide scroll bar for WebKit browsers (Chrome, Safari, Opera)
    "&::-webkit-scrollbar": {
      display: "none",
    },
    // Hide scroll bar for Firefox
    scrollbarWidth: "none",
    // Hide scroll bar for Internet Explorer and Edge
    "-ms-overflow-style": "none",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  "& svg": { marginRight: theme.spacing(2) },
}));

const Todo = ({ handleShowToDo, anchorEl, handleMenuClose }) => {
  const [showStatus, setShowStatus] = useState(false);

  const handleShowStatus = () => {
    setShowStatus(!showStatus);
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
        <StyledMenuItem onClick={handleMenuClose}>To Do</StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>Query</StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>Revision</StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>Finished</StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>Add New</StyledMenuItem>
        <StyledMenuItem onClick={handleMenuClose}>Manage Status</StyledMenuItem>
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
