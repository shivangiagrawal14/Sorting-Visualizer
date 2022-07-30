import React from "react";
import { useState } from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Bars from "./Bars";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Homepage.css";
let i, pivot, j;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Quick({ fn, inputArray, speed }) {
  const [userInput, setUserInput] = useState({ array: [], speed: "" });

  const dataFromHomePage = (array, speed) => {
    setUserInput({
      array: array,
      speed: speed,
    });
  };
  /* This function takes last element as pivot, places
       the pivot element at its correct position in sorted
       array, and places all smaller (smaller than pivot)
       to left of pivot and all greater elements to right
       of pivot */
  async function partition(arr, low, high, speed) {
    // pivot
    pivot = arr[high].value;

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    i = low - 1;

    for (j = low; j <= high - 1; j++) {
      // If current element is smaller
      // than the pivot
      if (arr[j].value < pivot) {
        // arr[high].color="green"
        // Increment index of
        // smaller element
        i++;
        arr[i].color = "red";
        arr[j].color = "blue";

        let temp = arr[i].value;
        arr[i].value = arr[j].value;
        arr[j].value = temp;
        await sleep(speed);
        setUserInput({ ...userInput, array: arr });
        arr[i].color = "#DCD7C9";
        arr[j].color = "#DCD7C9";
      }
    }
    arr[i + 1].color = "red";
    arr[high].color = "blue";
    let temp = arr[i + 1].value;
    arr[i + 1].value = arr[high].value;
    arr[high].value = temp;
    await sleep(speed);
    setUserInput({ ...userInput, array: arr });
    arr[i + 1].color = "#DCD7C9";
    arr[high].color = "#DCD7C9";
    return i + 1;
  }

  /* The main function that implements QuickSort
              arr[] --> Array to be sorted,
              low --> Starting index,
              high --> Ending index
     */
  async function quickSort(arr, low, high, speed) {
    if (low < high) {
      // pi is partitioning index, arr[p]
      // is now at right place
      let pi = await partition(arr, low, high, speed);

      // Separately sort elements before
      // partition and after partition
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
    arr.map((item) => {
      item.color = "#5FD068";
    });
    setUserInput({ ...userInput, array: arr });
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
                  quickSort(
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
