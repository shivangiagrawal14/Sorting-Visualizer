import Navbar from "./components/Navbar";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sortingcard from "./components/Sortingcard";
import "@fontsource/inter";
function App() {
  return (
    <div>
      <Navbar />
      {/* Grid to call each card */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "25px",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Sortingcard sortingAlgorithm="Bubble Sort" algo="bubble" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Sortingcard sortingAlgorithm="Insertion Sort" algo="insertion" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Sortingcard sortingAlgorithm="Quick Sort" algo="quick" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Sortingcard sortingAlgorithm="Selection Sort" algo="selection" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Sortingcard sortingAlgorithm="Merge Sort" algo="merge" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
