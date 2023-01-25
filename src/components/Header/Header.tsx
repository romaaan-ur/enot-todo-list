import React, { FC, useState } from "react";

import { Typography, Box, Drawer, IconButton, Switch } from "@mui/material";
import { SettingsIcon } from "../icons/SettingsIcon";

import "./style.css";
import { useApp } from "../../context";

export const Header: FC = () => {
  const { toggleShowNews, showNews } = useApp();
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => setShowDrawer((prev) => !prev);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
      px={1}
    >
      <Typography variant="h1">To Do</Typography>
      <IconButton onClick={toggleDrawer}>
        <SettingsIcon />
      </IconButton>
      <Drawer anchor="right" open={showDrawer} onClose={toggleDrawer}>
        <Box px={2} mt={2} display="flex" flexDirection="column">
          <Typography variant="subtitle1">Settings</Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="subtitle2">Show news block</Typography>
            <Box ml={2}>
              <Switch checked={showNews} onClick={toggleShowNews} />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
