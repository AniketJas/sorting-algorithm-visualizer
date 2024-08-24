import React from "react";
import MergeSortAnimation from "../AnimationFunction/MergeSortAnimation";
import QuickSortAnimation from "../AnimationFunction/QuickSortAnimation";
import BubbleSortAnimation from "../AnimationFunction/BubbleSortAnimation";
import SelectionSortAnimation from "../AnimationFunction/SelectionSortAnimation";
import { sortButtonToggle } from "../functions/sortButtonToggle";
import InsertionSortAnimation from "../AnimationFunction/InsertionSortAnimation";

export default function Button({ array, animationSpeed }) {
  return (
    <div className="flex py-3 justify-center gap-5">
      <button
        onClick={() => {
          sortButtonToggle("mergesort");
          MergeSortAnimation(array, animationSpeed);
        }}
        className="sort-btn py-2 px-4 rounded-xl toggleAlgoButton"
        id="mergesort"
      >
        Merge Sort
      </button>
      <button
        onClick={() => {
          sortButtonToggle("bubblesort");
          BubbleSortAnimation(array, animationSpeed);
        }}
        className="sort-btn py-2 px-4 rounded-xl toggleAlgoButton"
        id="bubblesort"
      >
        Bubble Sort
      </button>
      <button
        onClick={() => {
          sortButtonToggle("quicksort");
          QuickSortAnimation(array, animationSpeed);
        }}
        className="sort-btn py-2 px-4 rounded-xl toggleAlgoButton"
        id="quicksort"
      >
        Quick Sort
      </button>

      <button
        onClick={() => {
          sortButtonToggle("selectionsort");
          SelectionSortAnimation(array, animationSpeed);
        }}
        className="sort-btn py-2 px-4 rounded-xl toggleAlgoButton"
        id="selectionsort"
      >
        Selection Sort
      </button>

      <button
        onClick={() => {
          sortButtonToggle("insertionsort");
          InsertionSortAnimation(array, animationSpeed);
        }}
        className="sort-btn py-2 px-4 rounded-xl toggleAlgoButton"
        id="insertionsort"
      >
        Insertion Sort
      </button>
    </div>
  );
}
