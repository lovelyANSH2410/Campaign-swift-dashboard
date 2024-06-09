import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const ManageStatus = ({ handleShowStatus, handleShowToDo }) => {
  const [statuses, setStatuses] = useState([
    { id: 1, text: "Newly Added" },
    { id: 2, text: "My Status" },
  ]);
  const [newStatus, setNewStatus] = useState("");

  const handleAddStatus = () => {
    if (newStatus.trim()) {
      setStatuses([...statuses, { id: statuses.length + 1, text: newStatus }]);
      setNewStatus("");
    }
  };

  const handleDeleteStatus = (id) => {
    setStatuses(statuses.filter((status) => status.id !== id));
  };

  const handleEditStatus = (id) => {
    const newStatusText = prompt(
      "Edit status:",
      statuses.find((status) => status.id === id).text
    );
    if (newStatusText !== null) {
      setStatuses(
        statuses.map((status) =>
          status.id === id ? { ...status, text: newStatusText } : status
        )
      );
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        px: 0,
        width: 304,
        top: "55px",
        left: "1250px",
        margin: "auto",
        position: "absolute",
        zIndex: "100",
      }}
    >
      <Box
        sx={{ backgroundColor: "#ECF1FE", px: 4, fontSize: 14, py: 0 }}
        gutterBottom
      >
        Manage Status
      </Box>
      <List sx={{ px: 2 }}>
        {statuses.map((status) => (
          <ListItem key={status.id} sx={{ py: 1 }}>
            <ListItemText
              primaryTypographyProps={{
                style: { fontSize: 14, height: 14, color: "gray" },
              }}
              primary={status.text}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="edit"
                sx={{color:"#9F9F9F"}}
                onClick={() => handleEditStatus(status.id)}
              >
                <DriveFileRenameOutlineIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                sx={{color:"#9F9F9F"}}

                onClick={() => handleDeleteStatus(status.id)}
              >
                <DeleteOutlineIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        <ListItem
          sx={{
            backgroundColor: "#F9F9F9",
            width: 251,
            mx: "auto",
            borderRadius: 2,
            height: 22.67,
            mt: 1,
            py: 2,
          }}
        >
          <IconButton edge="end" aria-label="add" onClick={handleAddStatus}>
            <AddCircleOutlineIcon sx={{ width: 20, height: 20, color:"#9F9F9F" }} />
          </IconButton>
          <TextField
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            placeholder="Add New"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </ListItem>
      </List>
      <Box
        mt={2}
        mb={2}
        mx={4}
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"center"}
      >
        <Button
          variant="outlined"
          sx={{
            textAlign: "center",
            width: "115px",
            color: "gray",
            borderColor: "#ECF1FE",
          }}
          onClick={() => {
            handleShowStatus();
            handleShowToDo();
          }}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          sx={{
            textAlign: "center",
            width: "115px",
            backgroundColor: "#0058FF",
          }}
        >
          Done
        </Button>
      </Box>
    </Paper>
  );
};
