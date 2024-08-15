import React from "react";
import { mergeSort } from "../Algorithms/MergeSort";

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
    for (let i = 0; i < 10; i++) {
      array.push(randomIntFromIntervals(5, 600));
    }
    this.setState({ array });
  }

  mergeSort() {
    const sortedArray = mergeSort(this.state.array);
    console.log("Generated Array: " + this.state.array);
    console.log("My Sorted Array: " + sortedArray);
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

  testSortingAlgorithms() {
    const array = [];
    const length = randomIntFromIntervals(1, 1000);

    for (let i = 0; i < length; i++) {
      array.push(randomIntFromIntervals(-1000, 1000));
    }

    const jsSortedArray = array.slice().sort((a, b) => a - b);
    const mergeSortArray = mergeSort(array.slice());

    console.log(
      "Merge sort test: " + arraysAreEqual(jsSortedArray, mergeSortArray)
    );
  } //testing all algorithms

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
            <button onClick={() => this.testSortingAlgorithms()}>
              Test Sorting Algorithms
            </button>
          </div>
        </div>
        <div className="flex gap-1 max-w-screen justify-center">
          {array.map((value, idx) => {
            return (
              <div
                className="display-inline bg-blue-400 w-[10px]"
                key={idx}
                style={{ height: `${value}px` }}
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

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
