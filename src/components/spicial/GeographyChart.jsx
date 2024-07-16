import { ResponsiveChoropleth } from "@nivo/geo";
import React from "react";
import { mockGeographyData as data } from "../../data/mockData";
import { geoFeatures } from "../../data/mockGeoFeatures";

const GeographyChart = ({ width = 800, height = 600, isDashboard = false }) => {
  const colors = {
    grey: "#D1D5DB",
    blue: "blue",
    green: "green",
    red: "red",
    yellow: "#ffff00",
  };

  return (
    <div style={{ width, height }} className="flex justify-center items-center">
      <ResponsiveChoropleth
        width={width}
        height={height}
        data={data}
        theme={{
          axis: {
            domain: { line: { stroke: colors.grey } },
            legend: { text: { fill: colors.blue } },
            ticks: {
              line: { stroke: colors.red, strokeWidth: 1 },
              text: { fill: colors.green },
            },
          },
          legends: { text: { fill: colors.yellow } },
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#ffffff"
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: colors.grey,
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    </div>
  );
};

export default GeographyChart;
