import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import AddTask from "./AddTask";
import TasksList from "./TasksList";

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <AddTask />
        </Grid>
        <Grid xs={8}>
          <TasksList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HomePage