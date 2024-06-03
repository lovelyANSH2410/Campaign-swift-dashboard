import { styled } from "@mui/material";
import React from "react";

const TimeWrapper = styled("div")(({ theme }) => ({
  top: "446px",
  left: "1673px",
  width: "199px",
  height: "210px",
  padding: "10px",
  overflowY: "auto",
  position: "absolute",
  fontSize: "14px",
  backgroundColor: "white",
  border: "1px solid #ccc",
  color: "#6a6a6a",
  borderRadius: "4px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
paddingLeft: "30px",
  zIndex: 1000,
  msOverflowStyle: "none", // For Internet Explorer and Edge
  scrollbarWidth: "none", // For Firefox
  "&::-webkit-scrollbar": {
    // For Chrome, Safari, and Opera
    display: "none",
  },
}));

const TimeOption = styled("div")(({ theme }) => ({
  padding: "5px 10px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const Reminder = () => {
  const times = [
    "On Time",
    "5 minutes ahead",
    "30 minutes ahead",
    "1 hour ahead",
    "1 day ahead",
  ];

  return (
    <TimeWrapper>
      {times.map((time, index) => (
        <TimeOption key={index}>{time}</TimeOption>
      ))}
    </TimeWrapper>
  );
};

export default Reminder;
