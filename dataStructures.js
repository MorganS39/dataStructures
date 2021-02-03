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

// Copy array items using slice()
function forecast(arr) {
    return arr.slice(2, 4); // this takes the 2nd and 3rd index and copies them
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Copy ALL of an array with the Spread operator (...)
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Combine arrays with the spread operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}

console.log(spreadOut());

// Check for the presence of an element with indexOf()
function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate through ALL an array's items using for loops
function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Create complex multi-dimensional arrays
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
];

// Add key-value pairs to JavaScript objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

// Modify an object nested within an object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
};

userActivity.data.online = 45;

console.log(userActivity);

// Access property names with bracket notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory("apples"));

// Use the delete keyword to remove object properties
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// Check if an object has a property
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function isEveryoneHere(obj) {
    if (
        obj.hasOwnProperty('Alan') &&
        obj.hasOwnProperty('Jeff') &&
        obj.hasOwnProperty('Sarah') &&
        obj.hasOwnProperty('Ryan')
    ){
        return true;
    }
    return false;
}

console.log(isEveryoneHere(users));

// Iterate through the keys of an object with a for...in statement
function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
}

//