import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ id, item, index1, index2 }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <li className="flex flex-col justify-between text-gray-600 py-2 border-b ml-10">
      {item.taskTitle && (
        <div
          className="flex justify-between w-full"
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          style={style}
        >
          <div className="flex-1">
            <i className="uil uil-clipboard-notes"></i> {item.taskTitle}
          </div>
          <div className="text-xs text-blue-500 flex-shrink-0">
            <i className="uil uil-constructor"></i> {item.status}{" "}
            <i className="uil uil-calendar-slash"></i> {item.dueDate}
          </div>
        </div>
      )}

      {item.folders && item.folders.tasks && (
        <div className="ml-4">
          <div className="text-gray-600 py-1 border-b flex items-center">
            <i className="uil uil-angle-right-b"></i>{" "}
            <i className="uil uil-folder-minus ml-1"></i>{" "}
            <span className="ml-1">{item.folders.folderTitle}</span>
          </div>
          <ul className="pl-4">
            {item.folders.tasks.map((subTask, index) => (
              <Task
                key={subTask.id}
                item={subTask}
                index1={index1}
                index2={index}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Task;
