import React from "react";
import { RichUtils } from "draft-js";

const CustomToolbarButton = ({ editorState, onChange, style, iconClass }) => {
  const toggleStyle = () => {
    const newState = RichUtils.toggleInlineStyle(editorState, style);
    onChange(newState);
  };

  return (
    <div onClick={toggleStyle} style={{ cursor: "pointer", margin: "0 5px" }}>
      <i className={iconClass}></i>
    </div>
  );
};

export default CustomToolbarButton;
