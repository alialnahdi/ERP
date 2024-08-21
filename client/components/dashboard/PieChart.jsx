"use client";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

function PieCahrt({ salesRepsData }) {
  const [data, setData] = useState({
    labels: salesRepsData.map((sr) => sr.name),
    datasets: [
      {
        label: "Sales count",
        data: salesRepsData.map((sr) => sr.sales.length),
        backgroundColor: [
          "#a7f3d0",
          "#6ee7b7",
          "#34d399",
          "#10b981",
          "#059669",
          "#047857",
        ],
      },
    ],
  });

  return <Pie data={data} />;
}

export default PieCahrt;
