import React, { useState } from "react";
import { resetArray } from "../functions/resetArray";
import MergeSortAnimation from "../AnimationFunction/MergeSortAnimation";
import * as MyConstants from "../Constants";
import QuickSortAnimation from "../AnimationFunction/QuickSortAnimation";
import BubbleSortAnimation from "../AnimationFunction/BubbleSortAnimation";
import { sortButtonToggle } from "../functions/sortButtonToggle";
import { Slider } from "@mui/material";
import SelectionSortAnimation from "../AnimationFunction/SelectionSortAnimation";

function Visualizer() {
  const [arraySize, setArraySize] = useState(100);
  const [animationSpeed, setAnimationSpeed] = useState(10);

  const [array, setArray] = useState(resetArray(100));

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 50,
      label: "50",
    },
  ];

  function reset(size) {
    const array = resetArray(size);
    setArray(array);
    sortButtonToggle();
  }

  return (
    <>
      {/* navbar*/}
      <div className="px-5 h-16 flex gap-2 items-center">
        <div className="w-1/2">
          <button
            onClick={() => reset(arraySize)}
            className="bg-white text-black py-2 h-max px-4 rounded-2xl"
          >
            Generate New Array
          </button>
        </div>
        {/* {button div} */}
        <div className="flex w-1/2 justify-end gap-5">
          <button
            onClick={() => {
              sortButtonToggle("mergesort");
              MergeSortAnimation(array, animationSpeed);
            }}
            className="sort-btn py-2 px-4 rounded-xl"
            id="mergesort"
          >
            Merge Sort
          </button>
          <button
            onClick={() => {
              sortButtonToggle("bubblesort");
              BubbleSortAnimation(array, animationSpeed);
            }}
            className="sort-btn py-2 px-4 rounded-xl"
            id="bubblesort"
          >
            Bubble Sort
          </button>
          <button
            onClick={() => {
              sortButtonToggle("quicksort");
              QuickSortAnimation(array, animationSpeed);
            }}
            className="sort-btn py-2 px-4 rounded-xl"
            id="quicksort"
          >
            Quick Sort
          </button>

          <button
            onClick={() => {
              sortButtonToggle("selectionsort");
              SelectionSortAnimation(array, animationSpeed);
            }}
            className="sort-btn py-2 px-4 rounded-xl"
            id="selectionsort"
          >
            Selection Sort
          </button>
        </div>
      </div>

      {/* {slider divs} */}
      <div className="flex my-2 gap-5 justify-center">
        <p>Array Size:</p>
        <div className="w-1/3">
          <Slider
            size="small"
            defaultValue={75}
            valueLabelDisplay="auto"
            step={25}
            min={25}
            max={200}
            onChange={(event) => {
              setArraySize(event.target.value);
              reset(event.target.value);
            }}
          />
        </div>
        <p>Animation Speed: </p>
        <div className="w-1/3">
          <Slider
            aria-label="Custom marks"
            size="small"
            defaultValue={10}
            step={1}
            max={50}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={(event) => {
              setAnimationSpeed(event.target.value);
              console.log(animationSpeed);
            }}
          />
        </div>
      </div>

      {/* displaying bars for array*/}
      <div className="flex gap-1 max-w-screen justify-center mx-16">
        {array.map((value, idx) => {
          return (
            <div
              className="array-bar display-inline w-full"
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
