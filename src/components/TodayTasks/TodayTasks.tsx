import React, { FC } from "react";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Button, Paper, Typography } from "@mui/material";
import { TaskPerview } from "../TaskPreview";
import { useApp } from "../../context";
import { useTasks } from "../../context/TaskContext/TaskContext";
import { useNavigate } from "react-router-dom";

export const TodayTasks: FC = () => {
  const { showTodayTask, toggleShowTodayTask } = useApp();
  const { getTodayTasks } = useTasks();
  const navigate = useNavigate();

  const addTask = () => navigate("/add");

  return (
    <Box>
      <Box
        display="flex"
        mb={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex">
          <Checkbox
            color="secondary"
            checked={showTodayTask}
            onClick={toggleShowTodayTask}
          />
          <Typography variant="subtitle1">Today Tasks:</Typography>
        </Box>
        <Button variant="text" onClick={addTask}>
          Add task
        </Button>
      </Box>
      {showTodayTask && (
        <Paper variant="outlined">
          {getTodayTasks().map((task) => (
            <TaskPerview key={task.id} data={task} />
          ))}
        </Paper>
      )}
    </Box>
  );
};
