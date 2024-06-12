import { Box, Typography, styled } from "@mui/material";
import React from "react";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import Forward10Icon from "@mui/icons-material/Forward10";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Icon } from "@iconify/react";

const TimeWrapper = styled("div")(({ theme }) => ({
  top: "48px",
  left: "1699px",
  width: "183px",
  height: "488px",
  overflowY: "auto",
  position: "absolute",
  fontSize: "14px",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  border: "1px solid #ccc",
  color: "#6a6a6a",
  opacity: 1,
  borderRadius: "5px",
  boxShadow: "0px 0px 6px #00000029;",
  padding: "1px",
  textAlign: "left",
  zIndex: 1000,
  msOverflowStyle: "none", // For Internet Explorer and Edge
  scrollbarWidth: "none", // For Firefox
  "&::-webkit-scrollbar": {
    // For Chrome, Safari, and Opera
    display: "none",
  },
}));

const DueDate = () => {
  return (
    <TimeWrapper>
      <Box sx={{ margin: "20px 20px" }}>
        <Typography sx={{ fontSize: "10px", marginBottom: "10px" }}>
          Due Date
        </Typography>
        <Box>
          <WbSunnyIcon
            className="icons"
            sx={{ color: "#6A6A6A", width: "20px", height: "20px" }}
          />
          <InsertInvitationIcon
            className="icons"
            sx={{
              color: "#6A6A6A",
              width: "20px",
              height: "20px",
              marginLeft: "15px",
            }}
          />
          <Forward10Icon
            className="icons"
            sx={{
              color: "#6A6A6A",
              width: "20px",
              height: "20px",
              marginLeft: "15px",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "10px",
            marginTop: "10px",
            marginBottom: "15px",
            color: "#6A6A6A   ",
          }}
        >
          Priority
        </Typography>
        <Box
          sx={{
            display: "flex",
            paddingBottom: "10px",
            borderBottom: "1px solid #F3F3F3",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Icon
            icon="carbon:flag-filled"
            style={{ color: "red", width: 12, height: 14 }}
          />
          <Icon
            icon="carbon:flag-filled"
            style={{ color: "yellow", width: 12, height: 14 }}
          />
          <Icon
            icon="carbon:flag-filled"
            style={{ color: "blue", width: 12, height: 14 }}
          />
          <Icon
            icon="carbon:flag"
            style={{ color: "gray", width: 12, height: 14 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: ".1px solid #F3F3F3",
            paddingBottom: "10px",
          }}
        >
          <Icon
            icon="zondicons:exclamation-outline"
            style={{ color: "#6a6a6a" }}
          />
          <Typography
            sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
          >
            Associate
          </Typography>
          <Icon
            icon="uiw:right"
            style={{ marginLeft: "35px", color: "#6A6A6A" }}
          />
        </Box>
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Add Sub Task
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Change Status
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Move to
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Tag
            </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: ".1px solid #F3F3F3",
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
              paddingBottom: "10px",
            }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Convert to Note
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Copy Link
            </Typography>
          </Box>
          <Box
            sx={{
              borderBottom: ".1px solid #F3F3F3",
              display: "flex",
              marginTop: "12px",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Delete
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Icon
              icon="zondicons:exclamation-outline"
              style={{ color: "#6A6A6A" }}
            />
            <Typography
              sx={{ fontSize: "14px", marginLeft: "10px", color: "#6A6A6A" }}
            >
              Create Post
            </Typography>
          </Box>
        </Box>
      </Box>
    </TimeWrapper>
  );
};

export default DueDate;
