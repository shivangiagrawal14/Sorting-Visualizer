import React from 'react'

export default function SelectionData() {
  return (
    <div>In selection sort, the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array. It is also the simplest algorithm. It is an in-place comparison sorting algorithm. In this algorithm, the array is divided into two parts, first is sorted part, and another one is the unsorted part. Initially, the sorted part of the array is empty, and unsorted part is the given array. Sorted part is placed at the left, while the unsorted part is placed at the right.

<h4>Time Complexity</h4>
    <h5> Best Case Complexity </h5>-  It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of selection sort is O(n2).
    <h5>Average Case Complexity</h5> -  It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of selection sort is O(n2).
    <h5>Worst Case Complexity </h5>- It occurs when the array elements are required to be sorted in reverse order. The worst-case time complexity of selection sort is O(n2).
    
    <h4>Space Complexity</h4>
    -The space complexity of selection sort is O(1). It is because, in selection sort, an extra variable is required for swapping.
    </div>
  )
}
