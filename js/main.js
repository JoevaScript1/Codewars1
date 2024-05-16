// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  if (b === true){
    let b = "true"
    return b
  } else{
    let b = "false"
    return b
  }
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let result = []
  for(let i = a; i <= b; i++){ 
    result.push(i)
  }
    return result
}

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
  // Initialize an empty array to store the modified characters
  let result = [];

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
      // Capitalize the current character
      let capitalizedChar = str[i].toUpperCase();

      // Repeat the current character (lowercased) based on its position
      let repeatedChars = str[i].toLowerCase().repeat(i);

      // Concatenate the capitalized character with the repeated characters
      let modifiedChar = capitalizedChar + repeatedChars;

      // Push the modified character to the result array
      result.push(modifiedChar);
  }

  // Join the characters in the result array with dashes and return the result
  return result.join("-");
}
function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const square = i * i;
    const squareStr = square.toString();
    for (let j = 0; j < squareStr.length; j++) {
      if (parseInt(squareStr[j]) === d) {
        count++;
      }
    }
  }
  return count;
}



//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(num) {
  if (num === 0) {
    return num;
  } else if (num > 0) {
    return Math.ceil(num / 5) * 5;
  } else {
    return Math.ceil(num / 5) * 5;
  }
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
  return str.slice(1, -1)
 
};

// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n){
  if (n < 5){
    return 100 * n
  } else if (n >= 5 && n < 10){
    return 95 * n
  } else{
    return 90 * n
  }
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// do this in js

function shortestWordLength(str) {
  // Split the string into an array of words
  const words = str.split(" ");
  
  // Initialize shortestLength with the length of the first word
  let shortestLength = words[0].length;
  
  // Iterate through the array of words
  for (let i = 1; i < words.length; i++) {
      // Update shortestLength if the length of the current word is shorter
      if (words[i].length < shortestLength) {
          shortestLength = words[i].length;
      }
  }
  
  // Return the shortest length found
  return shortestLength;
}


// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
for (i = 1; i <= n; i++){
    z.push(x * i)
  }
  return z;
}

//Given an array of integers your solution should find the smallest integer.

function findSmallestInteger(array) {
  // Sort the array in ascending order
  array.sort(function(a, b) {
      return a - b;
  });
  
  // Return the first element (smallest integer) of the sorted array
  return array[0];
}

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
  const min = numbers[0]
  const max = numbers[numbers.length -1]
  let result = []
  
  for (i = min; i <= max; i++){
    result.push(i)
  }
    return result  
  }

  // Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

  class Kata {
    static getVolumeOfCuboid(length, width, height) { 
      let volumeOfCuboid = length * width * height
      return volumeOfCuboid
      // your code here
    }
  }

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  return (flower1 % 2 !== flower2 % 2)
  }
