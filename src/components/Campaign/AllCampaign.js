import React, { useState } from "react";
import { data } from "../../utils/data";
import { useSelector } from "react-redux";
import { selectFilters } from "../../utils/sortSlice";

const AllCampaign = () => {
  const [showSort, setShowSort] = useState(false);
  const filters = useSelector(selectFilters);
  const [activeTask, setActiveTask] = useState(null);
  const [campaignData, setCampaignData] = useState(data); 

  const filteredData = campaignData.filter((item) => {
    if (filters.johnDoe && item.associate === "John Doe") return true;
    if (filters.peterEngland && item.associate === "Peter England") return true;
    if (filters.henryPaul && item.associate === "Henry Paul") return true;
    return false;
  });

  const handleSort = () => {
    setShowSort(!showSort);
  };

  const onDrop = (index1, index2) => {
    console.log(
      `${activeTask} is going to place into ${index1} and at the position ${index2}`
    );

    if (activeTask == null || activeTask === undefined) return;

    const newData = JSON.parse(JSON.stringify(campaignData));

    const [sourceCampaignIndex, sourceTaskIndex] = activeTask;
    const sourceTask = newData[sourceCampaignIndex].folders.tasks[sourceTaskIndex];

    newData[sourceCampaignIndex].folders.tasks.splice(sourceTaskIndex, 1);

    newData[index1].folders.tasks.splice(index2, 0, sourceTask);

    setCampaignData(newData);
  };

  const onDragStart = (index1, index2) => {
    setActiveTask([index1, index2]);
  };

  return (
    <div className="h-screen border-r">
      <div className="flex justify-between px-10 py-6">
        <div className="flex">
          <i className="uil uil-comment-alt-lines mr-4 text-xl text-gray-400"></i>
          <p className="text-xl font-semibold text-gray-700">All Campaign</p>
        </div>
        <div className="text-xl">
          <button onClick={handleSort}>
            <i className="uil uil-scroll px-2 text-gray-400"></i>
          </button>
          <i className="uil uil-ellipsis-h px-2 text-gray-400"></i>
        </div>
      </div>
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
      <div className="">
        <ul>
          {(filteredData.length > 0 ? filteredData : campaignData).map(
            (item, index1) => (
              <li className="mx-14 my-5" key={item.associate}>
                <div className="font-semibold my-2 text-gray-600 bg-gray-100 p-2 px-5 rounded-lg">
                  <i className="uil uil-megaphone"></i> {item.campaignName}
                </div>
                <div className="text-gray-600 mx-6 py-1 border-b">
                  <i className="uil uil-angle-right-b"></i>{" "}
                  <i className="uil uil-folder-minus"></i>{" "}
                  {item.folders.folderTitle}
                </div>
                <ul>
                  {item.folders.tasks.map((task, index2) => (
                    <li
                      key={index2}
                      className="flex justify-between text-gray-600 py-2 border-b mx-20 active:opacity-50 active:cursor-grab"
                      draggable
                      onDragStart={() => onDragStart(index1, index2)}
                      onDragEnd={() => setActiveTask(null)}
                      onDrop={() => onDrop(index1, index2)}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <div>
                        <i className="uil uil-clipboard-notes"></i> {task.taskTitle}{" "}
                      </div>
                      <div className="text-xs text-blue-500">
                        <i className="uil uil-constructor"></i> {task.status}{" "}
                        <i className="uil uil-calendar-slash"></i> {task.dueDate}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default AllCampaign;
