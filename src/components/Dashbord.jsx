/* eslint-disable quotes */
import ApexCharts from "apexcharts";
import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    initCharts();
  }, []);

  const initCharts = () => {
    // Sparkline charts
    const spark1 = {
      chart: {
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21] }],
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ["#ffffff"],
      tooltip: {
        enabled: false,
      },
    };

    const spark2 = {
      chart: {
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69] }],
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ["#ffffff"],
      tooltip: {
        enabled: false,
      },
    };

    const spark3 = {
      chart: {
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19] }],
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ["#ffffff"],
      tooltip: {
        enabled: false,
      },
    };

    const spark4 = {
      chart: {
        type: "line",
        height: 80,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [{ data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61] }],
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ["#ffffff"],
      tooltip: {
        enabled: false,
      },
    };

    // Line chart
    const optionsLine = {
      chart: {
        height: 328,
        type: "line",
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 2,
          blur: 4,
          opacity: 1,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      series: [
        { name: "Music", data: [1, 15, 26, 20, 33, 27] },
        { name: "Photos", data: [3, 33, 21, 42, 19, 32] },
        { name: "Files", data: [0, 39, 52, 11, 29, 43] },
      ],
      title: {
        text: "Media",
        align: "left",
        offsetY: 25,
        offsetX: 20,
      },
      subtitle: {
        text: "Statistics",
        offsetY: 55,
        offsetX: 20,
      },
      markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
          size: 9,
        },
      },
      grid: {
        show: true,
        padding: {
          bottom: 0,
        },
      },
      labels: [
        "01/15/2002",
        "01/16/2002",
        "01/17/2002",
        "01/18/2002",
        "01/19/2002",
        "01/20/2002",
      ],
      xaxis: {
        tooltip: {
          enabled: false,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -20,
      },
    };

    // Radial bar chart
    const optionsCircle4 = {
      chart: {
        type: "radialBar",
        height: 350,
        width: "100%",
        offsetX: -10, // Adjusting offset to fit in the grid
      },
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: true,
          hollow: {
            margin: 5,
            size: "48%",
            background: "transparent",
          },
          track: {
            show: false,
          },
          startAngle: -180,
          endAngle: 180,
        },
      },
      stroke: {
        lineCap: "round",
      },
      series: [71, 63, 77],
      labels: ["June", "May", "April"],
      legend: {
        show: true,
        floating: true,
        position: "right",
        offsetX: 70,
        offsetY: 200,
      },
    };

    // Render charts
    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#spark3"), spark3).render();
    new ApexCharts(document.querySelector("#spark4"), spark4).render();
    new ApexCharts(document.querySelector("#chart-line"), optionsLine).render();
    new ApexCharts(
      document.querySelector("#chart-circle-4"),
      optionsCircle4
    ).render();
  };

  return (
    <div className="flex flex-wrap justify-center">
      {/* Sparkline charts */}
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div
          id="spark1"
          className="bg-blue-500 rounded-lg p-6 relative text-white"
        >
          <div className="hover:bg-white absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div
          id="spark2"
          className="bg-green-500 rounded-lg p-6 relative text-white"
        >
          <div className="hover:bg-white absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div
          id="spark3"
          className="bg-yellow-500 rounded-lg p-6 relative text-white"
        >
          <div className="hover:bg-white absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 p-4">
        <div
          id="spark4"
          className="bg-red-500 rounded-lg p-6 relative text-white"
        >
          <div className="hover:bg-white absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity"></div>
        </div>
      </div>

      {/* Line chart */}
      <div className="w-full p-4">
        <div
          id="chart-line"
          className="bg-white shadow-lg p-6 rounded-lg"
        ></div>
      </div>

      {/* Radial bar chart */}
      <div className="w-full p-4">
        <div
          id="chart-circle-4"
          className="bg-white shadow-lg p-6 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
