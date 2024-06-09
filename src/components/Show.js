import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "./TextEditor/EditorWrapper";
import SetDate from "./DatePicker/SetDate";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Tab,
  Typography,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicTable from "./Pages/Timelog";
import History from "./Pages/History";
import Submission from "./Pages/Submission";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TourIcon from "@mui/icons-material/Tour";
import Todo from "./Pages/Todo";

const Show = () => {
  const [toggle, setToggle] = useState(false);
  const [showToDo, setShowToDo] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowToDo = () => {
    setShowToDo(!showToDo);
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
      // bold: {
      //   icon: <FontAwesomeIcon icon={faBold} />,
      //   className: "custom-icon",
      // },
      // italic: {
      //   icon: <FontAwesomeIcon icon={faItalic} />,
      //   className: "custom-icon",
      // },
      // underline: {
      //   icon: <FontAwesomeIcon icon={faUnderline} />,
      //   className: "custom-icon",
      // },
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

  return (
    <div className="">
      <div className="flex border-b px-6 py-4 border-gray-200 text-xl font-semibold">
        <Typography variant="h8" sx={{ mx: "12px" }}>
          <TourIcon sx={{ color: "#d40202" }} /> My First Task
        </Typography>{" "}
        <Typography
          sx={{ color: "#0058FF", py: "5px", mx: "5px", cursor:"pointer" }}
          onClick={handleShowToDo}
        >
          {" "}
          TO DO <KeyboardArrowDownIcon sx={{ color: "gray" }} />
        </Typography>
        <span onClick={() => setToggle(!toggle)}>
          <CalendarMonthIcon
            sx={{ ml: "10px", color: "#0058FF", cursor: "pointer" }}
          />
          <Button sx={{ color: "gray", mr: "5px" }}>Set Date</Button>
        </span>
        <AvatarGroup max={2}>
          <Avatar
            sx={{ height: "30px", width: "30px" }}
            alt="Remy Sharp"
            src="https://avatars.githubusercontent.com/u/110022447?v=4"
          />
          <Avatar
            sx={{
              height: "30px",
              width: "30px",
            }}
            alt="+"
            src="/static/images/avatar/2.jpg"
          />
        </AvatarGroup>
        {toggle && <SetDate />}
        {showToDo && <Todo handleShowToDo={handleShowToDo} />}
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Input" value="1" />
              <Tab label="Comments" value="2" />
              <Tab label="Submission" value="3" />
              <Tab label="History" value="4" />
              <Tab label="Time log" value="5" />
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
