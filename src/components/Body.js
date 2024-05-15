import React from "react";
import Navigation from "./Navigation";
import Options from "./Options";
import Add from "./Add";
import Show from "./Show";

const Body = () => {
  return (
    <div className="flex">
      <Navigation />
      <Options />
      <Add />
      <Show />
    </div>
  );
};

export default Body;
