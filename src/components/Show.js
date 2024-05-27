import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorWrapper } from "./TextEditor/EditorWrapper";

const Show = () => {
  const [editorState, setEditorState] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const toolbarOptions = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
    inline: {
      options: ['bold', 'italic', 'underline'],
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    textAlign: {
      options: ['left', 'center', 'right'],
    },
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // Add a delay to handle blur before checking if the toolbar should be hidden
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };

  return (
    <div className="">
      <h1 className="border-b px-6 py-5 border-gray-200 text-xl font-semibold">
        🚩 My First Task
      </h1>
      <div className="flex justify-around">
        <span className="p-3 border w-[20%] text-center border-gray-200 hover:bg-gray-100 duration-500">
          Input
        </span>
        <span className="p-3 border w-[20%] text-center border-gray-200 hover:bg-gray-100 duration-500">
          Comments
        </span>
        <span className="p-3 border w-[20%] text-center border-gray-200 hover:bg-gray-100 duration-500">
          Submission
        </span>
        <span className="p-3 border w-[20%] text-center border-gray-200 hover:bg-gray-100 duration-500">
          History
        </span>
        <span className="p-3 border w-[20%] text-center border-gray-200 hover:bg-gray-100 duration-500">
          Timelog
        </span>
      </div>
      <div className="mx-10 my-5">
        <EditorWrapper>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={toolbarOptions}
            wrapperClassName="rdw-editor-wrapper"
            editorClassName="rdw-editor-main"
            toolbarClassName={`rdw-editor-toolbar ${isFocused ? 'visible' : 'hidden'}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Add Description"
          />
        </EditorWrapper>
      </div>
    </div>
  );
};

export default Show;
