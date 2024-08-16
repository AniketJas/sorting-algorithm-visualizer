import React, { useState } from "react";
import { resetArray } from "../functions/resetArray";
import MergeSortAnimation from "../AnimationFunction/MergeSortAnimation";
import * as MyConstants from "../Constants";

function Visualizer() {
  const [array, setArray] = useState(resetArray());

  function reset() {
    const array = resetArray();
    setArray(array);
  }

  return (
    <>
      <div className="px-5 h-16 flex gap-2 items-center">
        <div className="w-1/3">
          <button
            onClick={() => reset()}
            className="bg-white text-black py-2 h-max px-4 rounded-2xl"
          >
            Generate New Array
          </button>
        </div>
        <div className="flex w-2/3 justify-end gap-5">
          <button onClick={() => MergeSortAnimation(array)}>Merge Sort</button>
          {/* <button onClick={() => quickSort()}>Quick Sort</button>
          <button onClick={() => bubbleSort()}>Bubble Sort</button>
          <button onClick={() => selectionSort()}>Selection Sort</button> */}
        </div>
      </div>
      <div className="flex gap-1 max-w-screen justify-center">
        {array.map((value, idx) => {
          return (
            <div
              className="array-bar display-inline w-[5px]"
              key={idx}
              style={{
                height: `${value}px`,
                backgroundColor: MyConstants.PRIMARY_COLOR,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Visualizer;
