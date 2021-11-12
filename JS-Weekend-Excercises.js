// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function bool(b){
  return (b ? "Yes" : "No");}

// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTheLowestPositiveNum(arr){
  arr.sort(function(a, b) {return a - b});
  let min1, min2 ;  
  console.log(arr);
  for (let num of arr){
    if (num > 0) {
      if (min1 == undefined) min1 = num ;
      else if (min2 == undefined) {
        min2 = num ;
        return min1 + min2;
      }
    }
  }
}

// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer. Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

function binaryToInteger(binaryArr){
  let index = len = binaryArr.length -1; 
  let num = 0;
  while (index >= 0){
    num += binaryArr[len - index] * Math.pow(2,index); 
    index -- ; 
  }
  return num; 
}

// Ex2.3 - Find the Next Perfect Square 
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

function findNextSquare(num){
  if (Number( Math.sqrt(num)) ===  Math.sqrt(num) &&  Math.sqrt(num) % 1 === 0){
    return Math.pow(Math.sqrt(num) + 1 ,2);
  }
  else return -1;
}

// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it! findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr){
  const dic = {}
  arr.forEach((num) => (dic[num] = dic[num] ? ++dic[num] : 1));
  return Object.values(dic)[0] > Object.values(dic)[1] ? Object.keys(dic)[1] : Object.keys(dic)[0];
}

// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num){
  let sum = 0 ; 
  for (let i = 1 ; i <= num ; i++ ){
    sum += i ;
  }
  return sum ; 
}


// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

function yearToCentury (year){
  return Math.ceil(2000/100); 
}


// Ex2.7 - Basic Math
// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation. 