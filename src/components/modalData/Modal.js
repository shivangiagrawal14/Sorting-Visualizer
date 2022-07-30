import React from "react";
import classes from "./Modal.module.css";
import BubbleData from "./BubbleData";
import InsertionData from "./InsertionData";
import QuickData from "./QuickData";
import SelectionData from "./SelectionData";
import MergeData from "./MergeData";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <div>
            {" "}
            {props.title === "Bubble Sort" && <BubbleData />}
            {props.title === "Insertion Sort" && <InsertionData />}
            {props.title === "Quick Sort" && <QuickData />}
            {props.title === "Selection Sort" && <SelectionData />}
            {props.title === "Merge Sort" && <MergeData />}
          </div>
        </div>
        <footer className={classes.actions}>
          <button className={classes.confirmBtn} onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
