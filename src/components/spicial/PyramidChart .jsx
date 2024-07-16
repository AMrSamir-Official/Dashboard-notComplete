import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const PyramidChart = () => {
  // Options for the pyramid chart
  const pyramidOptions = {
    series: [
      {
        name: "",
        data: [200, 330, 548, 740, 880, 990, 1100, 1380],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    colors: [
      "#F44F5E",
      "#E55A89",
      "#D863B1",
      "#CA6CD8",
      "#B57BED",
      "#8D95EB",
      "#62ACEA",
      "#4BC3E6",
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: "Pyramid Chart",
      align: "middle",
    },
    xaxis: {
      categories: [
        "Sweets",
        "Processed Foods",
        "Healthy Fats",
        "Meat",
        "Beans & Legumes",
        "Dairy",
        "Fruits & Vegetables",
        "Grains",
      ],
    },
    legend: {
      show: false,
    },
  };

  // Render the pyramid chart after component mounts
  useEffect(() => {
    const pyramidChart = new ApexCharts(
      document.querySelector("#pyramid-chart"),
      pyramidOptions
    );
    pyramidChart.render();

    // Cleanup function to destroy the chart
    return () => {
      pyramidChart.destroy();
    };
  }, [pyramidOptions]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-800">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Pyramid Chart</h1>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 mb-8">
          {/* Pyramid Chart */}
          <div id="pyramid-chart">
            <Chart
              options={pyramidOptions}
              series={pyramidOptions.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyramidChart;
