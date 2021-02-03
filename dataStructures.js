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

// Remove items from an arry with pop()*end* and shift()*start*
function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove items using splice() to remove any item in the array
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
    arr.splice(0, 1);
    arr.splice(3);
console.log(arr);

// Add items using splice()
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//