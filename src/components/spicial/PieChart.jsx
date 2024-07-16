import { FiCircle } from "react-icons/fi"; // Example icon from React Icons library
import { mockPieData as data } from "../../data/mockData";

const PieChart = () => {
  // Mock data for pie chart (replace with your actual data)

  const colors = {
    grey: "#D1D5DB", // Example color from Tailwind CSS
    blue: "blue", // Example color from Tailwind CSS
    green: "green", // Example color from Tailwind CSS
    red: "red", // Example color from Tailwind CSS
    yellow: "#ffff00", // Example color from Tailwind CSS
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Example pie chart rendering */}
      <svg width={400} height={400}>
        {/* Render your pie slices here */}
        {data.map((entry, index) => (
          <path
            key={entry.id}
            d={`M${200},${200} L${
              200 + 100 * Math.cos((-2 * Math.PI * index) / data.length)
            },${
              200 + 100 * Math.sin((-2 * Math.PI * index) / data.length)
            } A100,100 0 ${index > data.length / 2 ? 1 : 0},1 ${
              200 + 100 * Math.cos((-2 * Math.PI * (index + 1)) / data.length)
            },${
              200 + 100 * Math.sin((-2 * Math.PI * (index + 1)) / data.length)
            } Z`}
            fill={`rgba(${index * 100}, ${index * 50}, ${index * 20}, 0.6)`} // Example dynamic color based on index
          />
        ))}
      </svg>

      {/* Example legend */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto w-max bg-white p-4 rounded-lg shadow-lg">
        {data.map((entry) => (
          <div key={entry.id} className="flex items-center space-x-2">
            <FiCircle
              size={16}
              color={`rgba(${entry.id * 100}, ${entry.id * 50}, ${
                entry.id * 20
              }, 0.6)`}
            />{" "}
            {/* Example icon */}
            <div>{entry.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
