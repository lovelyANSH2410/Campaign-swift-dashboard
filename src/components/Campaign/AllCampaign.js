import React, { useState } from "react";
import { data } from "../../utils/data";
import { useSelector } from "react-redux";
import { selectFilters } from "../../utils/sortSlice";
import Task from "./Task";
import AddOption from "./AddOption";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const AllCampaign = () => {
  const [showSort, setShowSort] = useState(false);
  const filters = useSelector(selectFilters);
  const [campaignData, setCampaignData] = useState(data);

  const filteredData = campaignData.filter((item) => {
    if (filters.johnDoe && item.associate === "John Doe") return true;
    if (filters.peterEngland && item.associate === "Peter England") return true;
    if (filters.henryPaul && item.associate === "Henry Paul") return true;
    return false;
  });

  const getTaskPos = (tasks, id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setCampaignData((campaignData) => {
      const newCampaignData = [...campaignData];
      newCampaignData.forEach((campaign) => {
        const tasks = campaign.folders.tasks;
        const originalPos = getTaskPos(tasks, active.id);
        const newPos = getTaskPos(tasks, over.id);

        if (originalPos !== -1 && newPos !== -1) {
          campaign.folders.tasks = arrayMove(tasks, originalPos, newPos);
        }
      });

      return newCampaignData;
    });
  };

  const handleSort = () => {
    setShowSort(!showSort);
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
      <AddOption />
      <div>
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <ul>
            {(filteredData.length > 0 ? filteredData : campaignData).map((item, index1) => (
              <li className="mx-14 my-5" key={item.id}>
                <div className="font-semibold my-2 text-gray-600 bg-gray-100 p-2 px-5 rounded-lg">
                  <i className="uil uil-megaphone"></i> {item.campaignName}
                </div>
                <div className="text-gray-600 mx-6 py-1 border-b">
                  <i className="uil uil-angle-right-b"></i>{" "}
                  <i className="uil uil-folder-minus"></i> {item.folders.folderTitle}
                </div>
                <SortableContext items={item.folders.tasks} strategy={verticalListSortingStrategy}>
                  <ul>
                    {item.folders.tasks.map((task, index2) => (
                      <Task key={task.id} id={task.id} item={task} index1={index1} index2={index2} />
                    ))}
                  </ul>
                </SortableContext>
              </li>
            ))}
          </ul>
        </DndContext>
      </div>
    </div>
  );
};

export default AllCampaign;
