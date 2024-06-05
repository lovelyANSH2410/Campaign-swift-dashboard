import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "./TextEditor/EditorWrapper";
import SetDate from "./DatePicker/SetDate";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicTable from "./Pages/Timelog";
import History from "./Pages/History";
import Submission from "./Pages/Submission";

const Show = () => {
  const [toggle, setToggle] = useState(false);
  const [editorState, setEditorState] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <h1 className="border-b px-6 py-5 border-gray-200 text-xl font-semibold">
        🚩 My First Task
        <button
          className="mx-5 p-2 text-sm rounded-lg  bg-gray-500 border text-white"
          onClick={() => setToggle(!toggle)}
        >
          Set Date
        </button>
        {toggle && <SetDate />}
      </h1>

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
          <TabPanel sx={{p:0}} value="3"><Submission /></TabPanel>
          <TabPanel sx={{p:0}} value="4"><History /></TabPanel>
          <TabPanel sx={{p:0}} value="5"><BasicTable /></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Show;
