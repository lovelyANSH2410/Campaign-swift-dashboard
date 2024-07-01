export const data = [
  {
    id: 1,
    associate: "John Doe",
    campaignName: "IndiaFont March Pro",
    folders: {
      id: "folder-1",
      folderTitle: "Folder Sample",
      tasks: [
        {
          id: "task-1",
          taskTitle: "Note Sample",
          status: "In-progress",
          dueDate: "Today",
        },
        {
          id: "task-2",
          taskTitle: "Diwali Article Writing",
          status: "Completed",
          dueDate: "Tomorrow",
        },
        {
          id: "task-3",
          taskTitle: "Diwali Offer",
          status: "Completed",
          dueDate: "Tomorrow",
        },
        {
          id: "folder-2",
          folders: {
            folderTitle: "Folder two title",
            tasks: [
              {
                id: "task-4",
                taskTitle: "Task one here",
                status: "",
                dueDate: "",
              },
              {
                id: "task-5",
                taskTitle: "Task here",
                status: "",
                dueDate: "",
              },
              {
                id: "folder-3",
                folders: {
                  folderTitle: "Folder Three title",
                  tasks: [
                    {
                      id: "task-6",
                      taskTitle: "Task one here",
                      status: "",
                      dueDate: "",
                    },
                    {
                      id: "task-7",
                      taskTitle: "Task here",
                      status: "",
                      dueDate: "",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 2,
    associate: "Peter England",
    campaignName: "IndiaFont April Pro",
    folders: {
      id: "folder-4",
      folderTitle: "Folder Sample",
      tasks: [
        {
          id: "task-8",
          taskTitle: "Task one here",
          status: "In-progress",
          dueDate: "Today",
        },
        {
          id: "task-9",
          taskTitle: "Task two title",
          status: "Completed",
          dueDate: "",
        },
        {
          id: "task-10",
          taskTitle: "Task three name",
          status: "Completed",
          dueDate: "",
        },
      ],
    },
  },
  {
    id: 3,
    associate: "Henry Paul",
    campaignName: "IndiaFont May Pro",
    folders: {
      id: "folder-5",
      folderTitle: "Folder Sample",
      tasks: [
        {
          id: "task-11",
          taskTitle: "Task one here",
          status: "In-progress",
          dueDate: "Today",
        },
        {
          id: "task-12",
          taskTitle: "Task two title",
          status: "Completed",
          dueDate: "Today",
        },
        {
          id: "task-13",
          taskTitle: "Task three name",
          status: "Completed",
          dueDate: "Today",
        },
      ],
    },
  },
];
