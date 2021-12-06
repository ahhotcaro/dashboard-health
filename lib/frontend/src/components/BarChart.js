import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const options = {
  maintainAspectRation: false,
};

const BarChart = () => {
  const [dataChart, setDataChart] = useState([]);

  const fetchWorkout = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/workout");
      if (!res) return;
      const datas7days = await res.json();

      const label = datas7days.map((itm) => itm.date);
      const workout_data = datas7days.map((itm) => parseInt(itm.energy));
      console.log(workout_data);
      const data = {
        labels: label,
        datasets: [
          {
            label: "Total Calories",
            data: workout_data,
            fill: true,
            borderColor: "rgb(192, 137, 34)",
            backgroundColor: "#fedeb485",
          },
        ],
      };
      setDataChart(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWorkout();
  }, []);

  return (
    <div>
      {dataChart.length === 0 ? (
        "Loading"
      ) : (
        <Line data={dataChart} options={options} />
      )}
    </div>
  );
};
export default BarChart;
