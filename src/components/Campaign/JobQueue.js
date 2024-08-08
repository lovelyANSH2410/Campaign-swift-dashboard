import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Icon } from "@iconify/react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SortIcon from "@mui/icons-material/Sort";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { selectFilters } from "../../utils/sortSlice";
import { data } from "../../utils/data";
import Task from "./Task";
import AddOption from "./AddOption";

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
    <Box
      height="100vh"
      borderRight="1px solid #f3f3f3"
      width="790px"
      overflow="hidden"
    >
      <Box display="flex" justifyContent="space-between" px="50px" mt="25px">
        <Box display="flex" alignItems="center">
          <MenuOpenIcon style={{ color: "gray" }} width="16px" />
          <Typography fontSize={18} color="#191919" fontWeight="600" ml={1}>
            Job Queue
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handleSort}>
            <SortIcon style={{ color: "gray" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ color: "gray" }} />
          </IconButton>
        </Box>
      </Box>
      <AddOption />
      <Box
        height="calc(100vh - 200px)"
        overflow="auto"
        className="scrollbar-hide"
        px="35px"
      >
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <List>
            {(filteredData.length > 0 ? filteredData : campaignData).map(
              (item) => (
                <ListItem
                  key={item.id}
                  disableGutters
                  style={{ width: "100%" }}
                >
                  <Box mx={2} my={2} width="100%">
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      fontWeight="fontWeightBold"
                      bgcolor="grey.100"
                      p={1}
                      px={2}
                      borderRadius={2}
                      width="100%"
                      display="flex"
                      height="40px"
                    >
                      <Box
                        component="span"
                        display="flex"
                        alignItems="center"
                        mr={1}
                      >
                        <Icon
                          icon="mage:megaphone-b"
                          width="20"
                          height="20"
                          style={{ color: "gray" }}
                        />
                      </Box>
                      <Typography fontSize={14} fontWeight={600}>
                        {item.campaignName}
                      </Typography>
                    </Typography>
                    <ListItemText
                      primary={
                        <Box display="flex" alignItems="center" mt="26.5px" px={2}>
                          <Icon
                            icon="icon-park-outline:down"
                            width="20"
                            height="20"
                            style={{ color: "gray" }}
                          />
                          <Box ml={1}>
                          <Icon
                            icon="fa6-solid:folder-open"
                            width="21"
                            height="17"
                            style={{ color: "gray" }}
                          /></Box>{" "}
                          <Typography fontSize={14} fontWeight={600} color='#474747' ml={1}>
                            {item?.folders?.folderTitle}
                          </Typography>
                        </Box>
                      }
                      style={{ width: "100%" }}
                    />
                    {/* <SortableContext
                      items={item.folders.tasks.map((task) => task.id)}
                      strategy={verticalListSortingStrategy}
                    >
                      <List style={{ width: "100%", paddingLeft:"50px" }}>
                        {item.folders.tasks.map((task) => (
                          <Task key={task.id} id={task.id} item={task} />
                        ))}
                      </List>
                    </SortableContext> */}
                  </Box>
                </ListItem>
              )
            )}
          </List>
        </DndContext>
      </Box>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </Box>
  );
};

export default AllCampaign;
