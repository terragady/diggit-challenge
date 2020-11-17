import React, { useEffect } from "react";
import styles from "./CompaniesChart.module.css";
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
    const gradient = ctx.createLinearGradient(0, 50, 0, 150);
    gradient.addColorStop(0, 'rgba(255, 0,0, 0.3)');
    gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    new Chart(ctx, {
      type: "line",
      data: {

        datasets: [
          {
            data,
            backgroundColor: gradient,
            borderColor: "transparent",
            pointRadius: 0,

          },
        ],

        labels,
      },
      options: {
        tooltips: {
          mode: 'x'
        },
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