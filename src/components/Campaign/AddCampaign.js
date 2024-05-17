import React, { useState } from "react";
import { receive_img } from "../../utils/constants";

const Add = () => {
  const [showSort, setShowSort] = useState(false);

  const handleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="h-screen border-r">
      <div className="flex justify-between px-10 py-6">
        <div className="flex">
          <i class="uil uil-comment-alt-lines mr-4 text-xl text-gray-400"></i>
          <p className="text-xl font-semibold text-gray-700">
            My First Campaign
          </p>
        </div>
        <div className="text-xl">
          <button onClick={handleSort}>
            <i class="uil uil-scroll px-2 text-gray-400"></i>
          </button>
          <i class="uil uil-ellipsis-h px-2 text-gray-400"></i>
        </div>
      </div>
      <div>
        <img
          className="opacity-30 w-[20%] mx-auto mt-14"
          src={receive_img}
          alt="logo"
        />
        <p className="font-semibold text-lg text-center py-4 text-gray-700">
          Let's start by adding tasks
        </p>
        <p className="text-blue-500 font-semibold text-center text-sm underline">
          Need help?
        </p>
      </div>
      <div className="m-14">
        <div className="bg-gray-100 p-2 px-5 rounded-lg flex justify-between">
          <div className="flex font-semibold">
            <i class="uil uil-plus"></i>
            <p>Add New</p>
          </div>
          <div className="">
            <div className="mx-4">
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
    </div>
  );
};

export default Add;
