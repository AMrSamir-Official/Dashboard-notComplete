import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [options, setOptions] = useState({
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      id: "areachart-2",
    },
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Support",
          },
        },
        {
          y: 8600,
          y2: 9000,
          borderColor: "#000",
          fillColor: "#FEB019",
          opacity: 0.2,
          label: {
            borderColor: "#333",
            style: {
              fontSize: "10px",
              color: "#333",
              background: "#FEB019",
            },
            text: "Y-axis range",
          },
        },
      ],
      xaxis: [
        {
          x: new Date("23 Nov 2017").getTime(),
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "Anno Test",
          },
        },
        {
          x: new Date("26 Nov 2017").getTime(),
          x2: new Date("28 Nov 2017").getTime(),
          fillColor: "#B3F7CA",
          opacity: 0.4,
          label: {
            borderColor: "#B3F7CA",
            style: {
              fontSize: "10px",
              color: "#fff",
              background: "#00E396",
            },
            offsetY: -10,
            text: "X-axis range",
          },
        },
      ],
      points: [
        {
          x: new Date("01 Dec 2017").getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "red",
            radius: 2,
            cssClass: "apexcharts-custom-class",
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560",
            },
            text: "Point Annotation",
          },
        },
        {
          x: new Date("08 Dec 2017").getTime(),
          y: 9340.85,
          marker: {
            size: 0,
          },
          image: {
            path: "../../assets/images/ico-instagram.png",
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      padding: {
        right: 30,
        left: 20,
      },
    },
    title: {
      text: "Line with Annotations",
      align: "left",
    },
    labels: [
      "2022-01-01",
      "2022-01-02",
      "2022-01-03",
      "2022-01-04",
      "2022-01-05",
      "2022-01-06",
      "2022-01-07",
      "2022-01-08",
      "2022-01-09",
    ],
    xaxis: {
      type: "datetime",
    },
  });

  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
