import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { userData } from "./data";
import "./BarChart.css";

function BarChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Modular Bar Chart",
      },
    },
  };
  
  const [UserData, setUserData] = useState({
    labels: userData.map((ele) => ele.year),
    datasets: [
      {
        label: "Eligible",
        data: userData.map((ele) => ele.eligible),
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Teal color
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Offers Recieved",
        data: userData.map((ele) => ele.recieved),
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Pink color
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="barGraph-container">
      <div className="barGraph">
        <Bar data={UserData} options={option} />
      </div>
      <div className="custom-legend">
        {UserData.datasets.map((dataset, index) => (
          <div key={index} className="legend-item">
            <span className="legend-color" style={{backgroundColor: dataset.backgroundColor}}></span>
            <span className="legend-label">{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default BarChart;
