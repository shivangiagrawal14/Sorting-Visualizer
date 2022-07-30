import React from "react";
import { useState } from "react";
import Homepage from "./Homepage";
import Bars from "./Bars";
import Navbar from "./Navbar";
import "./Homepage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

let i, key, j;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function Insertion() {
  const [userInput, setUserInput] = useState({ array: [], speed: "" });

  const dataFromHomePage = (array, speed) => {
    setUserInput({
      array: array,
      speed: speed,
    });
  };

  const insertionSort = async (arr, n, speed) => {
    for (i = 1; i < n; i++) {
      key = arr[i].value;
      j = i - 1;

      /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
      while (j >= 0 && arr[j].value > key) {
        arr[j + 1].color = "red";
        arr[j].color = "white";
        arr[j + 1].value = arr[j].value;

        await sleep(speed);
        setUserInput({ ...userInput, array: arr });
        arr[j + 1].color = "#DCD7C9";
        arr[j].color = "#DCD7C9";
        j = j - 1;
      }
      arr[j + 1].color = "red";
      arr[j + 1].value = key;
      await sleep(speed);
      setUserInput({ ...userInput, array: arr });
      arr[j + 1].color = "#DCD7C9";
    }
    arr.map((item) => {
      item.color = "#5FD068";
    });
    setUserInput({ ...userInput, array: arr });
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
                  insertionSort(
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
