import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Plotly from "plotly.js-dist-min";
import Plot from "react-plotly.js";

export default function PlotData(props) {
  //   let voltagePlot1 = {
  //     x: props.allDateTime,
  //     y: props.voltageBus1,
  //     type: "line",
  //   };
  //   let voltagePlot2 = {
  //     x: props.allDateTime,
  //     y: props.voltageBus2,
  //     type: "line",
  //   };
  console.log(props.allDateTime);

  let voltagePlot1 = {
    x: props.allDateTime,
    y: props.voltageBus1,
    type: "line",
  };
  let voltagePlot2 = {
    x: props.allDateTime,
    y: props.voltageBus2,
    type: "line",
  };

  var data = [voltagePlot1, voltagePlot2];

  return (
    <Plot
      data={data}
      layout={{ width: 1700, height: 400, title: "Voltage Plot" }}
    />
  );
}
