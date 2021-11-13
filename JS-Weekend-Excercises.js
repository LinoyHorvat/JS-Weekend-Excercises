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

function basicOp(operation, num1, num2){
  let res = num1 ;
  switch(operation){
    case '+':
    res += num2 ; 
    break ; 
    case '-':
    res -= num2 ; 
    break ; 
    case '*':
    res *= num2 ; 
    break ; 
    case '/':
    res /= num2 ; 
    break ; 
  }
  return res;
}

// Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?


function nb_year(p0, incPercent, newInhabitants, p){
  let years = 0 ; 
  while (p0 < p){
    p0 = p0 + (p0 * (incPercent/100)) + newInhabitants ;  
    years +=1 ;
  }
  return years; 
}

// Ex3.2 - People on the Bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

function peopleOnTheBus(arr){
  let people = 0 ; 
  for (let stop in arr){
    if(people < 0) return 'Error';
    else {
      people += arr[stop][0]; 
      people -= arr[stop][1];
    }
  }
  return (people >= 0 ? people : 'Error');
}

// Ex4.1 - Fibonacci

function fibonacci(n){
  let sum = 0 ; 
  const res = [0,1] ;
  for (let i=1 ; i < n ; i ++){
    sum = res[i] + res[i-1]; 
    res[i+1] = sum ; 
  }
  return res; 
}

// Ex4.2 - Tribonacci  works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

function tribonacci(n){
  let sum = 0 ; 
  const res = [0,1] ;
  for (let i=1 ; i < n ; i ++){
    sum = res[i] + res[i-1]; 
    res[i+1] = sum ; 
  }
  return res; 
}

// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeFirstLast (str){
  return str.slice(1,-1);
}


// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times. 

function repeatStr(num, str){
  return str.repeat(num);  
}

// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase (str){
  return str.slice(0,1) + str.slice(1).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

function toWeirdCase(str){
  let str2 = '' ; 
  let j = 0 ; 
  for (let i = 0 ; i < str.length ; i++){
    if (str[i] == ' ') {
      str2 += str[i] ; 
      j = 0 ;
    }
    else if (j % 2 == 0){
      str2 += str[i].toUpperCase();
      j++ ;
    }
    else {
      str2 += str[i].toLowerCase();
      j++ ;
    }
  }
  return str2; 
}

// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

