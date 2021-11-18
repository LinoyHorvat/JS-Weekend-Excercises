// Ex 6.1 - Mumbling //////////////////////////////////

function accum(str){
  const arr = [];
  for (let i = 0; i< str.length; i++){
    arr.push(str[i].toUpperCase());
    for (let j = 0 ; j < i ; j++){
      arr.push(str[i].toLowerCase());
    }
    arr.push('-');
  }
  return arr.join("").slice(0,-1);
}

// console.log(accum("abcd"));
// console.log(accum("RqaEzty"));
// console.log(accum("cwAt"));

// Ex 6.2 - Counting Duplicates //////////////////////////////////

function contDup(str){
  const dic = {};
  for (let letter of str.toLowerCase()){
    letter in dic ? dic[letter] += 1 : dic[letter] = 1;
  }
  let occurs =  Math.max(...Object.values(dic));
  return occurs == '-Infinity' ? `0 no repeats`  : occurs;
}
// console.log(contDup('a11'));

// Ex 6.3 - Organize strings //////////////////////////////////

function longest(s1, s2){
  const arr = [];
  for (let letter of s1.toLowerCase()){
    if (!arr.includes(letter)) arr.push(letter);
  }
  for (let letter of s2.toLowerCase()){
    if (!arr.includes(letter)) arr.push(letter);
  }
  return arr.sort().join("");
}
// console.log(longest("abcdefg", "abcdefghhhhhhhhhhhhhhh"));

// Ex 6 - isogram //////////////////////////////////

function isIsogram(str){
  const arr = [];
  for (let letter of str.toLowerCase()){
    if (!arr.includes(letter)) arr.push(letter);
    else return false; 
  }
  return true;
}
// console.log(isIsogram("moOse"));

// Ex 7 - Implement //////////////////////////////////
// arr = [1, 2, 3]; 
// const arr2 = arr.map(x => x * 2);
// console.log(`arr=${arr}`);
// console.log(`arr2=${arr2} which is arr * 2`);
// arr2.forEach(num => {console.log(num);});
// const arr3 = arr.filter(num => num % 2 === 0)
// console.log(`arr3 contains ${arr3} even`);


// Ex 8 - Find the perimeter of a Rectangle //////////////////////////////////

function findPerimeter(length, width) {
  return length * 2 + width * 2; 
}

// console.log(findPerimeter(20, 10));