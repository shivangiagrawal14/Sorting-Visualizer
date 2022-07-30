import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Merge from "./Merge";
import Insertion from "./Insertion";
import Selection from "./Selection";
import Quick from "./Quick";
import Bubble from "./Bubble";
import { BsFillChatDotsFill, BsArrowUpRightSquareFill } from "react-icons/bs";
import Modal from "./modalData/Modal";
import { Link } from "react-router-dom";
import "./Homepage.css";
export default function Sortingcard(props) {
  const { sortingAlgorithm, algo } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <CardContent
        style={{
          backgroundColor: "#fafbfc",
          margin: "2px",
          borderRadius: "1rem",
          border: "3px solid black",
          // boxShadow: "10px 5px 5px black",
        }}
      >
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: "10px",
            display: "flex",
            justifyContent: "center",
            color: "black",
            fontFamily: "inter",
            fontWeight: "bold",
            padding: "2rem",
            border: "1px solid black",
            borderRadius: "1rem",
            backgroundColor: "#B2C8DF",
            // boxShadow: "10px 5px 5px black",
          }}
          gutterBottom
        >
          {sortingAlgorithm}
        </Typography>

        <Typography
          // sx={{ mb: 1.5 }}
          color="text.secondary"
          style={{
            display: "flex",

            justifyContent: "space-around",
          }}
        >
          <button
            style={{
           
              borderStyle: "none",
              backgroundColor: "#C4D7E0",
              padding: "1rem",
              cursor: "pointer",
              fontFamily: "Inter",
              color: "#000000",
              border: "1px solid white",
              boxShadow: "10px 5px 5px black",
              margin: "2rem",
            }}
            onClick={handleClick}
          >
            Description
            <BsFillChatDotsFill style={{ marginLeft: "4px" }} />
          </button>
          <Link to={`/${algo}`}>
            <button
              className="button"
              style={{
                borderStyle: "none",
                backgroundColor: "#414d67",
                padding: "1rem",
                cursor: "pointer",
                fontFamily: "Inter",
                color: "white",
                border: "1px solid black",
                boxShadow: "10px 5px 5px black",
                margin: "2rem",
              }}
            >
              Visual Representation
              <BsArrowUpRightSquareFill style={{ marginLeft: "4px" }} />
            </button>
          </Link>
        </Typography>
      </CardContent>
      {open && <Modal title={sortingAlgorithm} onConfirm={handleClick} />}
    </>
  );
}
