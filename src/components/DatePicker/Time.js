import { styled } from "@mui/material";
import React from "react";

const TimeWrapper = styled("div")(({ theme }) => ({
  top: "402px",
  left: "1673px",
  width: "107px",
  height: "232px",
  overflowY: "auto",
  position: "absolute",
  fontSize: "14px",
  backgroundColor: "white",
  border: "1px solid #ccc",
  color: "#6a6a6a",
  borderRadius: "4px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  padding: "1px",
  textAlign: "center",
  zIndex: 1000,
  msOverflowStyle: "none",  // For Internet Explorer and Edge
  scrollbarWidth: "none",   // For Firefox
  "&::-webkit-scrollbar": { // For Chrome, Safari, and Opera
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

const Time = ({ onSelect }) => {
  const times = [
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
  ];

  return (
    <TimeWrapper>
      {times.map((time, index) => (
        <TimeOption key={index} onClick={() => onSelect(time)}>
          {time}
        </TimeOption>
      ))}
    </TimeWrapper>
  );
};

export default Time;
