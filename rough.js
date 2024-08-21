{
  /* {button div} */
}
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
</div>;
