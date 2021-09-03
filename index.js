// 1
function addToZero(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if ((arr[i] + arr[j]) === 0){
        return true;
      }
    }
  }
  return false;
}

// console.log(addToZero([]));
// console.log(addToZero([1]));
// console.log(addToZero([1, 2, 3]));
// console.log(addToZero([1, 2, 3, -2]));
//runtime: O(n^2)
//space complexity: O(1)


// 2
function hasUniqueChars(str){
  str = str.toLowerCase();
  str = str.split(" ").join("");
  const strArr = str.split('');
  strArr.sort();
  let tempChar = ''
  for(let i = 0; i < str.length; i++){
    if (str[i] != tempChar){
      tempChar = str[i]
    }
    else if (str[i] == tempChar){
      return false
    }
  }
  return true
}

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))
// console.log(hasUniqueChars("beep"))
// console.log(hasUniqueChars("bop"))

//runtime: O(n)
//space complexity: O(n)


//3
function isPanagram(str){
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++){
    if(str.includes("a" && "b" && "c" && "d" && "e" && "f" && "g" && "h" && "i" && "j" && "k" && "l" && "m" && "n" && "o" && "p" && "q" && "r" && "s" && "t" && "u" && "v" && "w" && "x" && "y" && "z")){
      return true;
    }
  }
  return false;
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog!"));
console.log(isPanagram("I like cats, but not mice"));
//runtime: O(n)
//space complexity: O(1)


// 4
function findLongestWord(arr) {
  let longestWord = "";
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length > longestWord.length){
      longestWord = arr[i];
    }
  }
  return longestWord
}

// console.log(findLongestWord(["hi","mesopotamia", "hello", "can"]))

//runtime: O(n) because it goes through a for loop for an array that could be any length. It's not O(n^2) because the if statement just takes the length and does a calculation.
//space complexity: O(n)