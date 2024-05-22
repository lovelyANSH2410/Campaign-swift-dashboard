import React from "react";

const AddOption = () => {
  return (
    <div className="m-14 mt-10">
      <div className="bg-gray-100 p-2 px-5 rounded-lg flex justify-between">
        <div className="flex font-semibold">
          <i className="uil uil-plus"></i>
          <p>Add New</p>
        </div>
        <div className="">
          <div className="mx-4">
            <label className="mx-3">
              <input type="radio" name="set" /> Campaign
            </label>
            <label className="mx-3">
              <input type="radio" name="set" /> Task
            </label>
            <label className="mx-3">
              <input type="radio" name="set" /> Note
            </label>
            <label className="mx-3">
              <input type="radio" name="set" /> Folder
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOption;
