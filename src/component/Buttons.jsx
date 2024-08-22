import React from "react";
import MergeSortAnimation from "../AnimationFunction/MergeSortAnimation";
import QuickSortAnimation from "../AnimationFunction/QuickSortAnimation";
import BubbleSortAnimation from "../AnimationFunction/BubbleSortAnimation";
import SelectionSortAnimation from "../AnimationFunction/SelectionSortAnimation";
import { sortButtonToggle } from "../functions/sortButtonToggle";
import { finalBarColor } from "../functions/finalBarColor";

export default function Button({ array, animationSpeed }) {
  return (
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
  );
}
