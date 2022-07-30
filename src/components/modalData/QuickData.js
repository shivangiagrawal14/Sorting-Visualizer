import React from 'react'

export default function QuickData() {
  return (
    <div> Quicksort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting an array of n elements. It is a faster and highly efficient sorting algorithm. This algorithm follows the divide and conquer approach.

<h4>Time Complexity</h4>
    <h5> Best Case Complexity </h5>-  In Quicksort, the best-case occurs when the pivot element is the middle element or near to the middle element. The best-case time complexity of quicksort is O(n*logn).
    <h5>Average Case Complexity</h5> - It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of quicksort is O(n*logn)
    <h5>Worst Case Complexity </h5>- In quick sort, worst case occurs when the pivot element is either greatest or smallest element. Suppose, if the pivot element is always the last element of the array, the worst case would occur when the given array is sorted already in ascending or descending order. The worst-case time complexity of quicksort is O(n2).
    
    <h4>Space Complexity</h4>
    -The space complexity of quicksort is O(n*logn).
    </div>
  )
}
