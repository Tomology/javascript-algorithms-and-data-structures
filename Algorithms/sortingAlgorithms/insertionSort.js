// Time Complexity:   O(n²)
// Space Complexity:  O(1)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }

  return arr;
}

insertionSort([2, 1, 9, 76, 44, -12, 3, 0, 3, 97, -11]);
