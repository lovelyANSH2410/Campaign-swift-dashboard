export const data = [
  {
    id: 1,
    associate: "John Doe",
    campaignName: "IndiaFont March Pro",
    folders: {
      folderTitle: "Folder title",
      tasks: [
        {
          id: 1,
          taskTitle: "Task one here",
          status: "In-progress",
          dueDate: "Today",
        },
        {
          id: 2,
          taskTitle: "Task two title",
          status: "Completed",
          dueDate: "Tomorrow",
        },
        {
          id: 3,
          taskTitle: "Task three name",
          status: "Completed",
          dueDate: "Tomorrow",
        },
        {
          folders: {
            folderTitle: "Folder two title",
            tasks: [
              {
                id: 4,
                taskTitle: "Task one here",
                status: "",
                dueDate: "",
              },
              {
                id: 5,
                taskTitle: "Task here",
                status: "",
                dueDate: "",
              },
              {
                folders: {
                  folderTitle: "Folder Three title",
                  tasks: [
                    {
                      id: 6,
                      taskTitle: "Task one here",
                      status: "",
                      dueDate: "",
                    },
                    {
                      id: 7,
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
      folderTitle: "Folder title",
      tasks: [
        {
          id: 8,
          taskTitle: "Task one here",
          status: "In-progress",
          dueDate: "Today",
        },
        {
          id: 9,
          taskTitle: "Task two title",
          status: "Completed",
          dueDate: "",
        },
        {
          id: 10,
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
      folderTitle: "Folder title",
      tasks: [
        {
          id: 11,
          taskTitle: "Task one here",
          status: "In-progress",
          dueDate: "Today",
        },
        {
          id: 12,
          taskTitle: "Task two title",
          status: "Completed",
          dueDate: "Today",
        },
        {
          id: 13,
          taskTitle: "Task three name",
          status: "Completed",
          dueDate: "Today",
        },
      ],
    },
  },
];
