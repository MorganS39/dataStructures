// Most basic array containing multiple data types [string, number, boolean, string, null]
let yourArray = ['five', 7, true, 'nothing', null];

// Accessing an array using bracket notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "turtle";
console.log(myArray);

// Add items to an array with push()*end of array* and unshift()*beginning of arrary*
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
  // Notice the unshift and push MUST apply to arr not mixedNumbers

  //