/*

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.



*/

function spinWords(string){
  const stringToArray = string.split(" ")
  let result = []
  for(string of stringToArray){ // n(2)
    if(string.length >= 5){ // n(2)
        result.push(string.split("").reverse().join(""))
    }else{
        result.push(string)
    }
  }

  return result.join(" ")
}
console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("Seriously this is the last one"))
