import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./Graph.module.css";

const icons = [
  "https://i.pinimg.com/736x/c5/73/ff/c573ff5552d6da9a1d28ec4e27cd1445.jpg", //HTML
  "https://i.pinimg.com/736x/ee/b3/5d/eeb35df1a6739f4cea43ed1cba70bc25.jpg", // CSS
  "https://i.pinimg.com/736x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg", // JS
  "https://i.pinimg.com/736x/25/e6/38/25e63889dbfb6aef7aea8352ef60dbae.jpg", // React
  "https://i.pinimg.com/736x/0d/73/13/0d73131414b74899a36cade5f3a7b1a7.jpg", // NodeJS
  "https://i.pinimg.com/736x/6f/9f/3f/6f9f3f2e54184aad5f3eb973646d42a3.jpg", //SQL
  "https://i.pinimg.com/736x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg", //GIT
];

const Graph = () => {
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "SQL", "GIT"],
    datasets: [
      {
        label: "Skill Level",
        data: [95, 90, 85, 90, 80, 85, 90],
        backgroundColor: "black",
        borderColor: "#f4a300",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { display: false },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#1a1a1a" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <h3 className={styles.title}>Skill Level</h3>
      <div className={styles.chartWrapper}>
        <Bar data={data} options={options} />
      </div>
      <div className={styles.iconRow}>
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Skill Icon ${index}`}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Graph;
