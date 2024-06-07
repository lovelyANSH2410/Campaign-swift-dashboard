import { styled } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

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
  zIndex: 1000,
  msOverflowStyle: "none", // For Internet Explorer and Edge
  scrollbarWidth: "none", // For Firefox
  "&::-webkit-scrollbar": {
    // For Chrome, Safari, and Opera
    display: "none",
  },
}));

const TimeOption = styled("div")(({ theme }) => ({
  padding: "2px",
  paddingLeft: "20px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const Todo = () => {
  const times = [
    "To Do",
    "Query",
    "Revision",
    "Finished",
  ];

  return (
    <TimeWrapper>
      {times.map((time, index) => (
        <TimeOption key={index}>
          {" "}
          <ErrorOutlineIcon
            sx={{ width: "15px", mb: "2px", mr: "5px", color: "#9F9F9F" }}
          />{" "}
          {time}
        </TimeOption>
      ))}
      <TimeOption>
        <AddCircleOutlineIcon
          sx={{ width: "15px", mb: "2px", mr: "5px", color: "#9F9F9F" }}
        />{" "}
        Add New
      </TimeOption>
      <TimeOption>
        <DriveFileRenameOutlineIcon
          sx={{ width: "15px", mb: "2px", mr: "5px", color: "#9F9F9F" }}
        />{" "}
        Manage Status
      </TimeOption>
    </TimeWrapper>
  );
};

export default Todo;
