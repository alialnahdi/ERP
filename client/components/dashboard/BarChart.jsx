"use client";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { scales } from "chart.js/auto";

function BarChart({ salesData }) {
  const revData = salesData.reverse();

  const [data, setData] = useState({
    labels: revData.map((s) =>
      new Date(s.createdAt).toLocaleDateString("en", { dateStyle: "medium" })
    ),
    datasets: [
      {
        label: "Total price",
        data: revData.map((s) => s.totalPrice),
        backgroundColor: "#10b981",
        categoryPercentage: 0.5,
        minBarLength: 7,
      },
      {
        label: "Quanity",
        data: revData.map((s) => s.quanity),
        backgroundColor: "#6ee7b7",
        categoryPercentage: 0.5,
        minBarLength: 7,
      },
    ],
  });

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
