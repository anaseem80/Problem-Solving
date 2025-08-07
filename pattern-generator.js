/*

Write a function that accepts an integer n in parameter and returns a string following the pattern below.

if n <= 0, return an empty string: ""
for your convenience, the tests will trim invisible spaces, i.e. trailing spaces before a newline, so that e.g. "x\nx x\nx" and "x\nx x    \nx" are considered equal, as they display identically when printed.

*/

// lets have a counter to determine spaces
// for example n = 3 so the first line will be 3 - 1 = 2, counter = 2
//   lines.push(" x") // the spaces at the beginning will be n - 1
//   lines.push("   x") // counter = 2 , so from here lets increment, 2 + 1 = 3, so spaces will be 3 and so on
//   console.log(lines.join("\n"))

function patternGenerator(n) {
  if (n <= 0) return "";

  let result = [];

  let level = 0;

  // Upper part
  for (let i = 1; i < n; i++) {
    let spaces = " ".repeat(i % 2 === 0 ? n : n - 1);

    if (i >= 3 && i % 2 !== 0) {
      level++;
    }

    let line = "";
    let char = level % 2 === 0 ? "x" : "o";

    for (let j = 0; j <= level; j++) {
      line += (j === 0 ? "" : " ") + char;
      char = char === "x" ? "o" : "x";
    }

    result.push(spaces + line);
  }

  // Middle line
  let middle = [];
  let isEven = n % 2 === 0;
  let loopDetermine = isEven ? n / 2 : n;

  for (let i = 0; i < loopDetermine; i++) {
    middle.push(i % 2 === 0 ? "x" : "o");
  }

  if (isEven) {
    result.push(middle.join(" ") + " " + middle.reverse().join(" "));
  } else {
    result.push(middle.join(" "));
  }

  // Lower part
  for (let i = 0; i < n - 1; i++) {
    let spaces = " ".repeat(i + 1);
    let currentLevel = Math.floor((n - 2 - i) / 2);

    let line = "";
    let char = "x";

    for (let j = 0; j <= currentLevel; j++) {
      line += (j === 0 ? "" : " ") + char;
      char = char === "x" ? "o" : "x";
    }

    result.push(spaces + line);
  }

  return result.join("\n");
}

console.log(patternGenerator(4))