import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Plotly from "plotly.js-dist-min";
import Plot from "react-plotly.js";

export default function PlotData() {
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: "scatter",
  };

  var trace2 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [16, 5, 11, 9, 16, 5, 11, 9, 16, 5],
    type: "scatter",
  };

  var data = [trace1];

  return (
    <Plot
      data={data}
      layout={{ width: 1700, height: 400, title: "Voltage Plot" }}
    />
  );
}
