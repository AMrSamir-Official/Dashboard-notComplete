import Chart from "chart.js/auto"; // Import Chart.js
import { useEffect, useRef } from "react";

const PieChart = ({ width = 100, height = 100 }) => {
  // Mock data for pie chart (replace with your actual data)
  const data = [
    { id: "A", label: "Category A", value: 300 },
    { id: "B", label: "Category B", value: 400 },
    { id: "C", label: "Category C", value: 200 },
    { id: "D", label: "Category D", value: 100 },
  ];

  // Mock colors (replace with your theme logic if necessary)
  const colors = ["#D1D5DB", "blue", "green", "red", "#ffff00"];

  // Reference to the chart canvas element
  const chartRef = useRef(null);

  // Function to create the chart
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Calculate total value for percentages
      const totalValue = data.reduce((acc, curr) => acc + curr.value, 0);

      // Create chart instance
      const chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: data.map((entry) => entry.label),
          datasets: [
            {
              data: data.map((entry) =>
                ((entry.value / totalValue) * 100).toFixed(2)
              ),
              backgroundColor: colors.slice(0, data.length),
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false, // Disable Chart.js built-in legend
            },
          },
        },
      });

      // Custom legend generation
      const legendDiv = document.createElement("div");
      legendDiv.className =
        "absolute bottom-0 left-0 right-0 mx-auto w-max bg-white p-4 rounded-lg shadow-lg";

      data.forEach((entry) => {
        const legendItem = document.createElement("div");
        legendItem.className = "flex items-center space-x-2";

        const icon = document.createElement("span");
        icon.innerHTML = `<FiCircle size={16} color=${
          colors[data.indexOf(entry)]
        } />`; // Example icon

        const text = document.createElement("div");
        text.textContent = entry.label;

        legendItem.appendChild(icon);
        legendItem.appendChild(text);
        legendDiv.appendChild(legendItem);
      });

      document.body.appendChild(legendDiv);

      return () => chart.destroy(); // Cleanup function
    }
  }, [data, colors, height, width]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <canvas ref={chartRef} width={width} height={height}></canvas>
    </div>
  );
};

export default PieChart;
