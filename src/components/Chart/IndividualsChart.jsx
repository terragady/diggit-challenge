import React, { useEffect } from "react";
import styles from "./IndividualsChart.module.css";
import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.elements.fontColor = "#849fb4";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0.4;
Chart.defaults.global.elements.line.borderColor = "transparent";

const IndividualsChart = ({ labels, data }) => {
  const chartRef = React.createRef();
  useEffect(() => {

    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {

        datasets: [
          {
            data,
            backgroundColor:
              "rgb(200, 186, 238)",
            borderColor: "transparent",

          },
        ],

        labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
        },
      },
    });
  })
  return (
    <div className={styles.chartWrapper}>
      <canvas
        //   className={styles.chart}
        id="myChart2"
        ref={chartRef}
      ></canvas></div>
  );
}

export default IndividualsChart;