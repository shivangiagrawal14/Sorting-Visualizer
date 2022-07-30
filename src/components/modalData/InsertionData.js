
import React from 'react'

export default function InsertionData() {
  return (
    <div>Insertion sort works similar to the sorting of playing cards in hands. It is assumed that the first card is already sorted in the card game, and then we select an unsorted card. If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side. Similarly, all unsorted cards are taken and put in their exact place.
         <h4>Time Complexity</h4>
    <h5> Best Case Complexity </h5>-  It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of insertion sort is O(n).
    <h5>Average Case Complexity</h5> -  The average case time complexity of insertion sort is O(n2).
    <h5>Worst Case Complexity </h5>- It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of insertion sort is O(n2). 
    
    <h4>Space Complexity</h4>
    -The space complexity of insertion sort is O(1). It is because, in insertion sort, an extra variable is required for swapping.
    </div>
  )
}
