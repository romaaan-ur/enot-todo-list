import React, { FC, useState } from "react";

import Box from "@mui/material/Box";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { useTasks } from "../../context";
import { ITask, TaskCategory } from "../../context/TaskContext/type";

export const AddTask: FC = () => {
  const { addTask } = useTasks();

  const [task, setTask] = useState<
    Pick<ITask, "title" | "message" | "category">
  >({
    message: "",
    title: "",
    category: "red",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleTitle = (value: string) =>
    setTask((prev) => ({ ...prev, title: value }));

  const handleMessage = (value: string) =>
    setTask((prev) => ({ ...prev, message: value }));

  const handleSetCategory = (category: TaskCategory) =>
    setTask((prev) => ({ ...prev, category }));
  const handleNotification = () => setShowNotification(!showNotification);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask({
      ...task,
      id: Math.random(),
      createdAt: new Date(),
      complete: false,
    });
    setTask({ title: "", message: "", category: "red" });
    handleNotification();
  };

  return (
    <Box mt={4}>
      <form onSubmit={onSubmit}>
        <Box mb={4}>
          <TextField
            label="Title"
            variant="outlined"
            onChange={(event) => handleTitle(event.target.value)}
            value={task.title}
            fullWidth
            required
          />
        </Box>
        <Box mb={4}>
          <TextField
            label="Message"
            variant="outlined"
            onChange={(event) => handleMessage(event.target.value)}
            value={task.message}
            fullWidth
            required
          />
        </Box>
        <Box mb={4}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category task</InputLabel>
            <Select
              id="category"
              value={task.category}
              labelId="category-label"
              label="Category task"
              variant="outlined"
              onChange={(event) =>
                handleSetCategory(event.target.value as TaskCategory)
              }
              fullWidth
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "pink",
                    "& .MuiMenuItem-root": {
                      padding: 2,
                      color: '#000'
                    },
                  },
                },
              }}
            >
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" fullWidth type="submit">
          Add task
        </Button>
      </form>
      <Snackbar
        open={showNotification}
        message="You added task"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
};
