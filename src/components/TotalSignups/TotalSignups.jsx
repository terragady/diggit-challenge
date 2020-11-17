import React from "react";
import DoughnutChart from "../Chart/DoughnutChart";

import styles from "./TotalSignups.module.css";

const TotalSignups = ({ doughnut, onDoughnutLenght }) => {
  return (
    <div className={styles.donutWrapper}>
      <div className={styles.chartWrapper}>
        <DoughnutChart
          labels={doughnut.labels}
          data={doughnut.data}
        />
        <div className={styles.donutLength}>
          <h2>{onDoughnutLenght()}</h2>
        </div>
      </div>
      <div className={styles.chartInfoWrapper}>
        <h2>Total Signups</h2>
        <div className={styles.chartStats}>
          <p className={styles.pCol}>
            <span>{doughnut.labels[0]}</span>
            <span className={styles.companies}>
              {doughnut.data[0]}
            </span>
          </p>
          <p className={styles.pCol}>
            <span>{doughnut.labels[1]}</span>
            <span className={styles.individuals}>
              {doughnut.data[1]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalSignups;
