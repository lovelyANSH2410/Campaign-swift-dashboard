import React from "react";

const Sort = () => {
  return (
    <div className="absolute left-[20%] top-80 z-10 rounded-xl w-96 h-[66%] bg-white shadow-lg p-4">
      <div className="font-semibold text-lg flex justify-between">
        <div className="flex">
          <i class="uil uil-envelope text-blue-500 text-xl"></i>
          <p className="px-2">Email</p>
        </div>
        <i class="uil uil-angle-up text-blue-500 text-xl"></i>
      </div>
      <select className="font-semibold text-gray-600 border-2 w-full border-gray-200 text-lg flex justify-between my-4 py-1 px-2 rounded-md">
        <option className="text-gray-600">Sent</option>
        <option className="text-gray-600">Received</option>
        <option className="text-gray-600">Draft</option>
      </select>
      <div className="text-lg font-semibold border-2 border-blue-300 p-4 rounded-md">
        <p className="font-bold mb-2">Template Name</p>
        <label className="text-gray-600 text-sm">
          Company Name/ URL / Ticker
        </label>
        <input
          placeholder="Type here"
          className="border-2 w-full border-gray-200 text-lg mb-2 py-1 px-2 rounded-md"
        />
        <select className="font-semibold text-gray-600 border-2 w-full border-gray-200 text-lg flex justify-between my-4 py-1 px-2 rounded-md">
          <option className="text-gray-600">Current Company</option>
          <option className="text-gray-600">Received</option>
          <option className="text-gray-600">Draft</option>
        </select>
        <p className="text-blue-400 mb-2 font-bold">
          Advanced Setting{" "}
          <i class="uil uil-angle-up text-blue-500 text-xl"></i>
        </p>
        <div className="text-gray-600">
          <input type="checkbox" className="size-4" /> John Doe
        </div>
        <div className="text-gray-600">
          <input type="checkbox" className="size-4" /> Peter England
        </div>
        <div className="text-gray-600">
          <input type="checkbox" className="size-4" /> Henry Paul
        </div>
        <p className="text-gray-600 mt-4">Boolean Operators</p>
        <input
          placeholder="and / or / not"
          className="border-2 w-full border-gray-200 text-lg mb-2 py-1 px-2 rounded-md"
        />
        <p className="text-gray-600 text-sm">Boolean Tutorial</p>
      </div>
      <select className="font-semibold text-gray-600 border-2 w-full border-gray-200 text-lg flex justify-between my-4 py-1 px-2 rounded-md">
        <option className="text-gray-600">Opened</option>
        <option className="text-gray-600">Closed</option>
      </select>
    </div>
  );
};

export default Sort;
