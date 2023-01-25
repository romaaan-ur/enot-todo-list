import React, { FC } from "react";

import Box from "@mui/material/Box";

import { DayPerview, NewsSlider, TodayTasks } from "../../components";
import { Stack } from "@mui/material";
import { useTasks } from "../../context";


export const Main: FC = () => {
  const { getListTasks } = useTasks();

  return (
    <Box>
      <TodayTasks />
      <Box mt={4}>
        <Stack spacing={4}>
          {getListTasks().map((task) => (
            <DayPerview key={task.formatDate} data={task} />
          ))}
          <NewsSlider />
        </Stack>
      </Box>
    </Box>
  );
};
