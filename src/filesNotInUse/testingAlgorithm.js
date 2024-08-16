//this file contains code for testing all the algorithms

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
} //testing all algorithms - to be added after functions of algorithms
  
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
}//to be added in the end of file

<button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button> //to be added in the render part