// import libriaries
import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// set options for the chart
const options = {
  maintainAspectRation: false,
};

const LineChart = () => {
  const [dataChart, setDataChart] = useState([]);
  const fetchWorkout = async () => {
    // connection with the server
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
          // set datasets
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
        // display this message while it is loading
        "Loading"
      ) : (
        <Line data={dataChart} options={options} />
      )}
    </div>
  );
};
export default LineChart;
