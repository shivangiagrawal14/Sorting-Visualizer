import React from "react";
import { useEffect, useState } from "react";
import "./Homepage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

function App(props) {
  const [userInput, setUserInput] = useState({ number: "", speed: "" });
  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  // array creator function
  const arrayCreator = (n) => {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push({
        value: Math.round(Math.random() * 10) + 1,
        color: "#DCD7C9",
      });
    }
    props.callBackFn(array, userInput.speed);
  };

  const speed = [
    {
      value: 1,
    },
    {
      value: 10,
    },
  ];

  function valuetext(value) {
    return value;
  }

  return (
    <div className="page">
      {/* button created to generated a new array */}

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
            sm={4}
            md={4}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <input
              className="inputs"
              name="number"
              type="number"
              min="0"
              max="100"
              value={userInput.number}
              onChange={handleInput}
              placeholder="Enter a number"
            />{" "}
          </Grid>
          <Grid>
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              <div style={{ color: "black" }}>Adjust the speed</div>
              <Slider
                sx={{ width: "100px", marginLeft: "10px" }}
                aria-label="Custom speed"
                name="speed"
                defaultValue={1}
                getAriaValueText={valuetext}
                step={1}
                valueLabelDisplay="auto"
                speed={speed}
                onChange={handleInput}
              />
            </div>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{ cursor: "pointer", fontFamily: "Inter" }}
              className="btn"
              onClick={() => {
                arrayCreator(userInput.number);
              }}
            >
              Generate Array
            </button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
