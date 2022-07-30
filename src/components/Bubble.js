import React from "react";
import { useState } from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Bars from "./Bars";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Homepage.css";
let i = 0;
let j = 0;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// input array= value , color
export default function Bubble() {
  const [userInput, setUserInput] = useState({ array: [], speed: 1 });

  const dataFromHomePage = (array, speed) => {
    console.log(speed);
    setUserInput({
      array: array,
      speed: speed,
    });
  };

  const bubbleSort = async (arr, speed) => {
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].value > arr[j + 1].value) {
          arr[j].color = "red";
          arr[j + 1].color = "blue";
          var temp = arr[j].value;
          arr[j].value = arr[j + 1].value;
          arr[j + 1].value = temp;
          await sleep(speed);
          setUserInput({ ...userInput, array: arr });
          arr[j].color = "#DCD7C9";
          arr[j + 1].color = "#DCD7C9";
        }
      }
      arr[arr.length - 1 - i].color = "#5FD068";
    }
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
              margin: "auto",
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
                  bubbleSort(userInput.array, userInput.speed);
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
