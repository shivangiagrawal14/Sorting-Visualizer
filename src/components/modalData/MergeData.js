import React from 'react'

export default function MergeData() {
  return (
    <div>Merge sort is similar to the quick sort algorithm as it uses the divide and conquer approach to sort the elements. It is one of the most popular and efficient sorting algorithm. It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves. We have to define the merge() function to perform the merging.

<h4>Time Complexity</h4>
    <h5> Best Case Complexity </h5>- It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of merge sort is O(n*logn).
    <h5>Average Case Complexity</h5> -  It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of merge sort is O(n*logn).
    <h5>Worst Case Complexity </h5>- It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of merge sort is O(n*logn).
    
    <h4>Space Complexity</h4>
    -The space complexity of merge sort is O(n). It is because, in merge sort, an extra variable is required for swapping
    </div>
  
    )
}
