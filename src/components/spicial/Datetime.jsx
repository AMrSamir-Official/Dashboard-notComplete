import ApexCharts from "apexcharts";
import React, { useEffect, useRef, useState } from "react";

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const options = {
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1361919600000, 39.6],
          ],
        },
      ],
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
        },
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "#999",
            label: {
              show: true,
              text: "Support",
              style: {
                color: "#fff",
                background: "#00E396",
              },
            },
          },
        ],
        xaxis: [
          {
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#999",
            yAxisIndex: 0,
            label: {
              show: true,
              text: "Rally",
              style: {
                color: "#fff",
                background: "#775DD0",
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    };

    const newChart = new ApexCharts(chartRef.current, options);
    setChart(newChart);
    newChart.render();

    return () => {
      newChart.destroy();
    };
  }, []);

  const handleZoom = (start, end) => {
    if (chart) {
      chart.zoomX(start, end);
    }
  };

  const handleResetZoom = () => {
    if (chart) {
      chart.resetZoom();
    }
  };

  const handleSave = () => {
    if (chart) {
      chart.dataURI().then((imageURI) => {
        // Here you can save the imageURI to state, use it as a download link, etc.
        console.log("Chart saved as:", imageURI);
      });
    }
  };

  return (
    <div className="w-full h-auto">
      <div ref={chartRef} className="w-full h-96"></div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          id="one_month"
          onClick={() =>
            handleZoom(
              new Date("28 Jan 2014").getTime(),
              new Date("07 Feb 2024").getTime()
            )
          }
          className="btn"
        >
          1 Month
        </button>
        <button
          id="six_months"
          onClick={() =>
            handleZoom(
              new Date("27 Sep 2012").getTime(),
              new Date("27 Feb 2013").getTime()
            )
          }
          className="btn"
        >
          6 Months
        </button>
        <button
          id="one_year"
          onClick={() =>
            handleZoom(
              new Date("27 Feb 2012").getTime(),
              new Date("27 Feb 2013").getTime()
            )
          }
          className="btn"
        >
          1 Year
        </button>
        <button
          id="ytd"
          onClick={() =>
            handleZoom(
              new Date("01 Jan 2013").getTime(),
              new Date("27 Feb 2013").getTime()
            )
          }
          className="btn"
        >
          YTD
        </button>
        <button
          id="all"
          onClick={() =>
            handleZoom(
              new Date("23 Jan 2012").getTime(),
              new Date("27 Feb 2013").getTime()
            )
          }
          className="btn"
        >
          All
        </button>
        <button onClick={handleResetZoom} className="btn">
          Reset Zoom
        </button>
        <button onClick={handleSave} className="btn">
          Save Chart
        </button>
      </div>
    </div>
  );
};

export default ChartComponent;
