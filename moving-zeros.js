/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

*/

// loop through it and get the zeros only // done
// slice the zeros from the inital array // done
// move the zeros to the end // done

function moveZeros(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }

    array.push(arr[i]);
  }
  while (array.length < arr.length) {
    array.push(0);
  }
  return array;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
