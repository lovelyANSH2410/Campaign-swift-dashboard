import React, { useState } from "react";
import { data } from "../../utils/data";
import { useSelector } from "react-redux";
import { selectFilters } from "../../utils/sortSlice";
import Task from "./Task";
import AddOption from "./AddOption";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
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

  const findAndRemoveTask = (tasks, id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        return tasks.splice(i, 1)[0];
      }
      if (tasks[i].folders?.tasks) {
        const found = findAndRemoveTask(tasks[i].folders.tasks, id);
        if (found) return found;
      }
    }
    return null;
  };

  const findTaskContainer = (tasks, id) => {
    for (let task of tasks) {
      if (task.id === id) return tasks;
      if (task.folders?.tasks) {
        const container = findTaskContainer(task.folders.tasks, id);
        if (container) return container;
      }
    }
    return null;
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setCampaignData((campaignData) => {
      const newCampaignData = [...campaignData];
      let activeTask = null;

      for (let campaign of newCampaignData) {
        if (!activeTask)
          activeTask = findAndRemoveTask(campaign.folders.tasks, active.id);
        if (activeTask) break;
      }

      if (activeTask) {
        for (let campaign of newCampaignData) {
          const container = findTaskContainer(campaign.folders.tasks, over.id);
          if (container) {
            const overIndex = container.findIndex(
              (task) => task.id === over.id
            );
            container.splice(overIndex, 0, activeTask);
            break;
          }
        }
      }

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
      <div className="h-[calc(100vh-200px)] overflow-y-auto p-4 scrollbar-hide">
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <ul>
            {(filteredData.length > 0 ? filteredData : campaignData).map(
              (item, index1) => (
                <li className="mx-14 my-5" key={item.id}>
                  <div className="font-semibold my-2 text-gray-600 bg-gray-100 p-2 px-5 rounded-lg">
                    <i className="uil uil-megaphone"></i> {item.campaignName}
                  </div>
                  <div className="text-gray-600 mx-6 py-1 border-b">
                    <i className="uil uil-angle-right-b"></i>{" "}
                    <i className="uil uil-folder-minus"></i>{" "}
                    {item.folders.folderTitle}
                  </div>
                  <SortableContext
                    items={item.folders.tasks.map((task) => task.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <ul>
                      {item.folders.tasks.map((task, index2) => (
                        <Task key={task.id} id={task.id} item={task} />
                      ))}
                    </ul>
                  </SortableContext>
                </li>
              )
            )}
          </ul>
        </DndContext>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default AllCampaign;
