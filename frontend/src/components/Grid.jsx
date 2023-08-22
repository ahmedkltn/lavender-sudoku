import React from "react";
import Row from './Row';
import { useMyContext } from "./SelectedCellContext";

const Grid = () => {
  const { dataArray } = useMyContext();
  return (
    <div className="grid grid-cols-9 w-full gap-1 p-1 bg-violet-500 rounded-lg ">
      {dataArray.map((content, rowIndex) => (
        <Row key={rowIndex} rowArray={content} rowId={rowIndex}></Row>
      ))}
    </div>
  );
};

export default Grid;
