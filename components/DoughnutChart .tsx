"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  accounts,
}: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [
          112500, 115110, 188846, 156454, 122475,
          111550, 222450, 255550,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(37, 150, 190)",
          "#96be25",
          "#9925be",

          "#bea925",
          "#0f3c4c",
        ],
      },
    ],

    labels: [
      "Bank 1",
      "Bank 2",
      "Bank 3",
      "Bank 4",
      "Bank 5",
      "Bank 6",
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: { display: false },
        },
      }}
    />
  );
};

export default DoughnutChart;
