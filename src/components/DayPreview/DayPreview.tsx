import React, { FC, useCallback, useState } from "react";

import { Box, Typography, Paper, Collapse, IconButton } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { IPastTasks } from "../../context/TaskContext/type";
import { ExpandLess } from "@mui/icons-material";
import { TaskPerview } from "../TaskPreview";

interface Props {
  data: IPastTasks;
}

export const DayPerview: FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(!open), [open]);

  return (
    <Paper variant="outlined">
      <Box display="flex" alignItems="stretch">
        <Box
          width={5}
          minHeight="100%"
          borderRadius={3}
          bgcolor={"#A9A9A9"}
          mr={2}
        />
        <Box display="flex" flex={1} flexDirection="column" onClick={handleOpen} sx={{ cursor: "pointer" }}>
          <Typography variant="subtitle1">{data.formatDate} Tasks</Typography>
        </Box>
        <Box my="auto" mr={2}>
          <IconButton
            onClick={handleOpen}
            sx={{
              width: 21,
              height: 21,
              backgroundColor: "#fff",
              ":hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box mt={2}>
          {data.tasks.map((item) => (
            <TaskPerview key={item.id} data={item} />
          ))}
        </Box>
      </Collapse>
    </Paper>
  );
};
