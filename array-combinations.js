/*

In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!


[[1,2],[4],[5,6]]

[1,4,5],[1,4,6],[2,4,5],[2,4,6] = 4 => means the length of it
*/

/**
 * First remove duplicates from sub array ()
 * Array will be set to [] and will get the result of it will be the return value
 *
 */
function solve(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum * removeDuplicates(arr[i]).length;
  }
  return sum;
}

function removeDuplicates(subArr) {
  let unique = [];
  for (let i = 0; i < subArr.length; i++) {
    let existed = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === subArr[i]) {
        existed = true;
        break;
      }
    }

    if (!existed) {
      unique.push(subArr[i]);
    }
  }
  return unique;
}

solve([
  [1, 2, 3],
  [3, 4, 6, 6, 7],
  [8, 9, 10, 12, 5, 6],
]);
