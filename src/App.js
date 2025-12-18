import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import RouterApp from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <RouterApp />
      </Box>
    </BrowserRouter>
  );
}

export default App;
