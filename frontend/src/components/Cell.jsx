import React from "react";
import { useMyContext } from "./SelectedCellContext";

const Cell = ({ content, rowId, columnId }) => {
  const { setSelectedCell } = useMyContext();

  // Define the color scheme based on your LandingPage colors
  const bgColor = content.isModifiable ? "bg-purple-200" : "bg-purple-300";
  const textColor = content.isModifiable ? "text-gray-600" : "text-gray-700";

  return (
    <button
      onClick={() => {
        if (content.isModifiable) {
          const cell = { row: rowId, col: columnId };
          setSelectedCell(cell);
        }
      }}
      className={`flex justify-center items-center ${bgColor} ${textColor} h-10 sm:h-12 lg:w-12 w-9 font-semibold text-lg sm:text-2xl pb-1 ${
        content.isModifiable && "hover:bg-purple-800 hover:text-white focus:bg-purple-800"
      } rounded-lg shadow-md transition duration-300`}
    >
      {content.value}
    </button>
  );
};

export default Cell;
