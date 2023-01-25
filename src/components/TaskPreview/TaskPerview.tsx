import React, { FC, useMemo } from "react";

import { Box, Switch, Typography } from "@mui/material";
import { ITask } from "../../context/TaskContext/type";
import { useTasks } from "../../context";

type Props = {
  data: ITask;
};

const COLOR_CATEGORY = {
  red: "#FF0000",
  blue: "#366EFF",
  yellow: "#FFEB33",
};

const completeDecoration = {
  textDecoration: "line-through",
};

export const TaskPerview: FC<Props> = ({ data }) => {
  const { id, title, message, complete, category } = data;
  const { togglecompleteTask } = useTasks();

  const randomColor = useMemo(() => COLOR_CATEGORY[category], [category]);

  return (
    <Box display="flex" alignItems="stretch" mb={2}>
      <Box
        width={5}
        minHeight="100%"
        borderRadius={3}
        bgcolor={randomColor}
        mr={2}
      />
      <Box display="flex" width="82%" flexDirection="column">
        <Typography
          variant="subtitle1"
          noWrap={true}
          style={complete ? completeDecoration : undefined}
        >
          {title}
        </Typography>
        <Typography variant="body2" noWrap={true}>
          {message}
        </Typography>
      </Box>
      <Box my="auto">
        <Switch checked={complete} onClick={() => togglecompleteTask(id)} />
      </Box>
    </Box>
  );
};
