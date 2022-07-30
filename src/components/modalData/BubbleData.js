import React from "react";

export default function BubbleData() {
  return (
    <>
      <div>
        Bubble sort works on the repeatedly swapping of adjacent elements until
        they are not in the intended order.
      </div>
      <h4>Time Complexity</h4>
      <h5> Best Case Complexity </h5>- It occurs when there is no sorting
      required, i.e. the array is already sorted. The best-case time complexity
      of bubble sort is O(n).
      <h5>Average Case Complexity</h5> - It occurs when the array elements are
      in jumbled order that is not properly ascending and not properly
      descending. The average case time complexity of bubble sort is O(n2).
      <h5>Worst Case Complexity </h5>- It occurs when the array elements are
      required to be sorted in reverse order. That means suppose you have to
      sort the array elements in ascending order, but its elements are in
      descending order. The worst-case time complexity of bubble sort is O(n2).
      <h4>Space Complexity</h4>
      -The space complexity of bubble sort is O(1). It is because, in bubble
      sort, an extra variable is required for swapping.
    </>
  );
}
