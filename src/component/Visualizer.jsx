import React, { useState } from "react";
import { resetArray } from "../functions/resetArray";
import MergeSortAnimation from "../AnimationFunction/MergeSortAnimation";
import * as MyConstants from "../Constants";
import QuickSortAnimation from "../AnimationFunction/QuickSortAnimation";
import BubbleSortAnimation from "../AnimationFunction/BubbleSortAnimation";
import { sortButtonToggle } from "../functions/sortButtonToggle";
import { Slider } from "@mui/material";
import SelectionSortAnimation from "../AnimationFunction/SelectionSortAnimation";
import { finalBarColor } from "../functions/finalBarColor";

function Visualizer() {
  const [arraySize, setArraySize] = useState(75);
  const [animationSpeed, setAnimationSpeed] = useState(20);
  // const [checkBtn, setCheckBtn] = useState(false);
  const [array, setArray] = useState(resetArray(arraySize));

  const marks = [
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
    {
      value: 60,
      label: "60",
    },
    {
      value: 75,
      label: "75",
    },
    {
      value: 90,
      label: "90",
    },
    {
      value: 100,
      label: "100",
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
      <div className="px-5 h-16 mt-2 flex gap-2 items-center">
        {/* div for generate new array button */}
        <div className="w-1/6">
          <button
            onClick={() => reset(arraySize)}
            className="bg-white text-black py-2 h-max px-4 rounded-2xl"
          >
            Generate New Array
          </button>
        </div>

        {/* {slider divs} */}
        <div className="flex w-5/6 my-2 justify-center items-center">
          {/* div for array size slider */}
          <div className="flex gap-4 w-1/2">
            <p>Array Size:</p>
            <div className="w-2/3">
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
          </div>

          {/* div for animation speed slider */}
          <div className="flex gap-4 w-1/2 items-center">
            <p>Animation Speed: </p>
            <div className="w-2/3">
              <Slider
                aria-label="Custom marks"
                size="small"
                defaultValue={20}
                step={5}
                min={5}
                max={100}
                valueLabelDisplay="off"
                marks={marks}
                onChange={(event) => {
                  setAnimationSpeed(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* {button div} */}
      <div className="flex py-3 justify-center gap-5">
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
            finalBarColor(array, animationSpeed);
          }}
          className="sort-btn py-2 px-4 rounded-xl"
          id="selectionsort"
        >
          Selection Sort
        </button>
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
