import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "./TextEditor/EditorWrapper";
import SetDate from "./DatePicker/SetDate";
import { Avatar, AvatarGroup, Box, Tab, Typography, Menu, MenuItem } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicTable from "./Pages/Timelog";
import History from "./Pages/History";
import Submission from "./Pages/Submission";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Todo from "./Pages/Todo";
import { Icon } from "@iconify/react";
import DueDate from "./Pages/DueDate";

const Show = () => {
  const [toggle, setToggle] = useState(false);
  const [showToDo, setShowToDo] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("1");
  const [showDueDate, setShowDueDate] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const rowOptionsOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setShowToDo(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowToDo = () => {
    setShowToDo(!showToDo);
  };

  const handleDueDateShow = () => {
    setShowDueDate(!showDueDate);
  };

  const toolbarOptions = {
    options: [
      "inline",
      "blockType",
      "fontSize",
      "list",
      "textAlign",
      "history",
    ],
    inline: {
      options: ["bold", "italic", "underline"],
    },
    list: {
      options: ["unordered", "ordered"],
    },
    textAlign: {
      options: ["left", "center", "right"],
    },
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  const tabStyle = (isSelected) => ({
    width: "155px",
    borderRight: "2px solid #EDEDED",
    textTransform: "none",
    backgroundColor: isSelected ? "#F9F9F9" : "transparent",
    fontWeight: isSelected ? "600" : "normal",
    color: "#6A6A6A",
  });

  return (
    <div className="">
      <div
        className="flex border-b-2 align-middle"
        style={{ paddingBottom: 15 }}
      >
        <Icon
          icon="carbon:flag-filled"
          style={{
            color: "red",
            marginTop: "21px",
            marginLeft: 46.5,
          }}
        />
        <Typography
          sx={{
            ml: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "17px",
            color: "#191919",
          }}
        >
          My First Task
        </Typography>
        <Typography
          sx={{
            color: "#0058FF",
            cursor: "pointer",
            ml: "15px",
            marginTop: "19px",
            fontSize: "14px",
          }}
          onClick={handleMenuOpen}
        >
          TO DO <KeyboardArrowDownIcon sx={{ color: "gray" }} />
        </Typography>
        <span
          onClick={() => setToggle(!toggle)}
          style={{ display: "flex", marginTop: "21px", cursor: "pointer" }}
        >
          <Icon
            icon="solar:calendar-outline"
            style={{
              color: "blue",
              marginLeft: "14.67px",
              width: 16,
              height: 17,
            }}
          />
          <Typography
            sx={{
              color: "gray",
              mr: "5px",
              fontSize: "14px",
              marginLeft: "10px",
            }}
          >
            Set Date
          </Typography>
        </span>
        <AvatarGroup max={2} style={{ marginLeft: "15px" }}>
          <Avatar
            sx={{ height: "32px", width: "32px", marginTop: "15px" }}
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/110022447?v=4"
          />
          <Icon
            icon="fluent-mdl2:add-to"
            style={{
              color: "gray",
              width: "34px",
              height: "34px",
              marginLeft: -2,
              marginTop: "17px",
            }}
          />
        </AvatarGroup>
        <Icon
          icon="lets-icons:meatballs-menu"
          style={{
            color: "navy",
            marginTop: "19px",
            marginLeft: "270px",
            width: "26px",
            height: "26px ",
            cursor: "pointer",
          }}
          onClick={handleDueDateShow}
        />
        {showDueDate && <DueDate />}
        {toggle && <SetDate />}
        {showToDo && (
          <Todo
            handleShowToDo={handleShowToDo}
            anchorEl={anchorEl}
            handleMenuClose={handleMenuClose}
          />
        )}
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                ".MuiTabs-indicator": {
                  display: "none", // Hide the blue bottom border
                },
                ".Mui-selected": {
                  color: "#6A6A6A !important", // Ensure the selected tab text color is gray
                },
              }}
            >
              <Tab label="Input" value="1" sx={tabStyle(value === "1")} />
              <Tab label="Comments" value="2" sx={tabStyle(value === "2")} />
              <Tab label="Submission" value="3" sx={tabStyle(value === "3")} />
              <Tab label="History" value="4" sx={tabStyle(value === "4")} />
              <Tab label="Time log" value="5" sx={tabStyle(value === "5")} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="mx-10 my-5">
              <EditorWrapper>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  toolbar={toolbarOptions}
                  wrapperClassName="rdw-editor-wrapper"
                  editorClassName="rdw-editor-main"
                  toolbarClassName={`rdw-editor-toolbar ${
                    isFocused ? "visible" : "hidden"
                  }`}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Add Description"
                />
              </EditorWrapper>
            </div>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel sx={{ p: 0 }} value="3">
            <Submission />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value="4">
            <History />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value="5">
            <BasicTable />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Show;
