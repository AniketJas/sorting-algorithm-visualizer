import React from "react";
import { mergeSort } from "../Algorithms/MergeSort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 125;
// This is the main color of the array bars.
const PRIMARY_COLOR = "#f0c808";
// This is the final color of the array bars.
const FINAL_COLOR = "green";
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { array: [] };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromIntervals(5, 600));
    }
    this.setState({ array });
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
    }
  }

  consoleSortedArray() {
    console.log("Generated Array" + this.state.array);
    console.log(
      "Sorted Array" + this.state.array.slice().sort((a, b) => a - b)
    );
  }

  mergeSort() {
    console.log("Merge Sort");
    this.consoleSortedArray();
    const animations = mergeSort(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : FINAL_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    console.log("Quick sort");
  }

  bubbleSort() {
    console.log("bubble sort");
  }

  selectionSort() {
    console.log("Selection sort");
  }

  render() {
    const { array } = this.state;
    return (
      <>
        <div className="px-5 h-16 flex gap-2 items-center">
          <div className="w-1/3">
            <button
              onClick={() => this.resetArray()}
              className="bg-white text-black py-2 h-max px-4 rounded-2xl"
            >
              Generate New Array
            </button>
          </div>
          <div className="flex w-2/3 justify-end gap-5">
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
          </div>
        </div>
        <div className="flex gap-1 max-w-screen justify-center">
          {array.map((value, idx) => {
            return (
              <div
                className="array-bar display-inline w-[10px]"
                key={idx}
                style={{ height: `${value}px`, backgroundColor: PRIMARY_COLOR }}
              ></div>
            );
          })}
        </div>
      </>
    );
  }
}

function randomIntFromIntervals(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
