import { FiCircle } from "react-icons/fi"; // Example icon from React Icons library
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  // Example color variables, replace with your theme logic
  const colors = {
    gray: "text-gray-400", // Example class for gray color
    green500: "text-green-500", // Example class for green color
    green600: "text-green-600", // Example class for darker green color
  };

  return (
    <div className="w-full mx-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FiCircle className="text-2xl text-gray-400" /> {/* Example icon */}
          <h4 className="font-bold text-gray-400 ml-2">{title}</h4>
        </div>
        <div>
          <ProgressCircle progress={progress} size="40" />
        </div>
      </div>
      <div className="flex justify-between mt-1">
        <h5 className="text-green-500">{subtitle}</h5>
        <h5 className="italic text-green-600">{increase}</h5>
      </div>
    </div>
  );
};

export default StatBox;
