import React from "react";

export default function Bars(props) {
  return (
    <div
      style={
        {
          // position: "relative",
          // margin: "auto",
          // width: "80%",
        }
      }
    >
      {props.array.length > 0 && (
        <div
          style={{
            backgroundColor: "#151D3B",
            margin: "auto",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              width: "50%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.array.map((item) => {
              return (
                <div
                  key={Math.random()}
                  style={{
                    height: `${item.value}rem`,
                    width: "0.3rem",
                    backgroundColor: item.color,

                    margin: "1px",
                    display: "inline-block",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
