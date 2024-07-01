import React from "react";
import {
  Box,
  Typography,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Paper,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const AddOption = () => {
  return (
    <Box width="690px" mx="auto" mt={2}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#F3F3F3",
          borderRadius: 2,
          display: "flex",
          height:"40px",
          justifyContent: "space-between",
          p:"3px"
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          fontWeight="fontWeightBold"
          marginLeft={2}
        >
          <Icon
            icon="mingcute:add-fill"
            width="15"
            height="15"
            style={{ color: "#191919" }}
          />
          <Typography ml={1 / 2} fontSize={14} fontWeight={600}>
            Add New
          </Typography>
        </Box>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="set"
            name="set"
            sx={{ bgcolor: "#F9F9F9", px: "10px", borderRadius: 2 }}
          >
            <FormControlLabel
              value="campaign"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
              }
              label="Campaign"
              sx={{ ".MuiTypography-root": { fontSize: 14 } }}
            />
            <FormControlLabel
              value="task"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
              }
              label="Task"
              sx={{ ".MuiTypography-root": { fontSize: 14 } }}
            />
            <FormControlLabel
              value="note"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
              }
              label="Note"
              sx={{ ".MuiTypography-root": { fontSize: 14 } }}
            />
            <FormControlLabel
              value="folder"
              control={
                <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
              }
              label="Folder"
              sx={{ ".MuiTypography-root": { fontSize: 14 } }}
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default AddOption;
