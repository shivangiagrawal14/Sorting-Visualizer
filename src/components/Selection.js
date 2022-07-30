import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Bars from "./Bars";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Homepage.css";
let i, j, min_idx;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function Selection() {
  const [userInput, setUserInput] = useState({ array: [], speed: "" });

  const dataFromHomePage = (array, speed) => {
    setUserInput({
      array: array,
      speed: speed,
    });
  };

  const selectionSort = async (arr, n, speed) => {
    function swap(arr, xp, yp) {
      var temp = arr[xp].value;
      arr[xp].value = arr[yp].value;
      arr[yp].value = temp;
    }
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++) {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i + 1; j < n; j++) {
        if (arr[j].value < arr[min_idx].value) {
          min_idx = j;
        }
      }
      // Swap the found minimum element with the first element
      arr[min_idx].color = "red";
      arr[i].color = "blue";
      swap(arr, min_idx, i);
      await sleep(speed);
      setUserInput({ ...userInput, array: arr });
      arr[min_idx].color = "#DCD7C9";
      arr[i].color = "#DCD7C9";
      arr[i].color = "#5FD068";
    }
    arr[n - 1].color = "#5FD068";
  };
  return (
    <>
      <Navbar />
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
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Homepage callBackFn={dataFromHomePage} />
          </Grid>
          {userInput.array.length > 0 && (
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                style={{ cursor: "pointer", fontFamily: "Open Sans" }}
                className="btn"
                onClick={() => {
                  selectionSort(
                    userInput.array,
                    userInput.array.length,
                    userInput.speed
                  );
                }}
              >
                Click here to sort
              </button>
            </Grid>
          )}
          <Grid item xs={12} md={12} lg={12}>
            <Bars array={userInput.array} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
