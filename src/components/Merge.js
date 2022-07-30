import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Bars from "./Bars";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Homepage.css";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Merge() {
  const [userInput, setUserInput] = useState({ array: [], speed: "" });

  const dataFromHomePage = (array, speed) => {
    setUserInput({
      array: array,
      speed: speed,
    });
  };

  async function merge(arr, l, m, r, speed) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i].value;
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j].value;

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k].color = "red";
        arr[k].value = L[i];
        await sleep(speed);
        setUserInput({ ...userInput, array: arr });
        arr[k].color = "#5FD068";
        i++;
      } else {
        arr[k].color = "red";
        arr[k].value = R[j];
        await sleep(speed);
        setUserInput({ ...userInput, array: arr });
        arr[k].color = "#5FD068";
        j++;
      }
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k].color = "red";
      arr[k].value = L[i];
      await sleep(speed);
      setUserInput({ ...userInput, array: arr });
      arr[k].color = "#5FD068";
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k].color = "red";
      arr[k].value = R[j];
      await sleep(speed);
      setUserInput({ ...userInput, array: arr });
      arr[k].color = "#5FD068";
      j++;
      k++;
    }
  }

  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted */
  async function mergeSort(arr, l, r, speed) {
    if (l >= r) {
      return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    await mergeSort(arr, l, m, speed);
    await mergeSort(arr, m + 1, r, speed);
    await merge(arr, l, m, r, speed);
  }
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
                  mergeSort(
                    userInput.array,
                    0,
                    userInput.array.length - 1,
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
