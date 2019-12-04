// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//===========================OK! Think I have a solution!==================================//
// Objects put numbers in order, so store the number as key, and increase the count of the value each time it's encountered.
// e.g. numStore = {}
// if it's found:
//numStore[num[i]]++ will increase the count
// then use array methods to create the array with the number of instances of each key

// seems easiest way to do that is to just use a for loop, so in this case it would be to user for..in to iterate over obj, then for loop to push the number in

// let object = { 2: 10, 3: 4, 4: 2, 5: 1, 6: 3 };
// let finalArr = [];

// for (const property in object) {
//   for (let i = 0; i < object[property]; i++) {
//     finalArr.push(property);
//   }
// }

// ^ tested, works, but will probably also want to use the Array.fill method to create new arrays of the repeating nums for the final array

// Note: the numbers get converted to strings in the object, so probably best to use separate hashes - one for strings, one for numbers

function cleanTheRoom(arr) {
  // add validity check later.
  let finalArray = [];
  let numberCount = {};
  let stringCount = {};

  // check if number, then store in one hash
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (numberCount[arr[i]] > 0) {
        numberCount[arr[i]]++;
      } else if (numberCount[arr[i]] === undefined) {
        numberCount[arr[i]] = 1;
      }
      //check if string, then store in another hash
    } else if (typeof arr[i] === "string") {
      if (stringCount[arr[i]] > 0) {
        stringCount[arr[i]]++;
      } else if (stringCount[arr[i]] === undefined) {
        stringCount[arr[i]] = 1;
      }
    }
  }

  // merge the two objects to get a comprehensive list of all keys in both objects to iterate over
  let allCount = { ...numberCount, ...stringCount };
  console.log(`allcount = `, allCount);

  // use the "master key" to
  Object.keys(allCount).forEach(key => {
    if (numberCount[key] && numberCount[key] > 1) {
      let tempArray = new Array(numberCount[key]);

      finalArray.push(tempArray.fill(Number(key)));
    } else if (numberCount[key] && numberCount[key] == 1) {
      finalArray.push(Number(key));
    } else if (stringCount[key] > 1) {
      let tempArray = new Array(stringCount[key]);

      finalArray.push(tempArray.fill(key));
    } else if (stringCount[key] == 1) {
      finalArray.push(key);
    }
  });

  console.log("answer: ", finalArray);
  return finalArray;
}
let testArr = [2, 2, 2, 2, 3, 4, 4, 7, 9, 0, 1, 1, 7];
// should output [0, [1, 1], [2, 2, 2, 2], 3, [4, 4], [7, 7], 9 ];

// let newA = [[2, 2, 2, 2], 3, [4, 4], 7, 9, 0, [1, 1], 7];
let mixedArr = [1, "2", "3", 2];
let mixedArr2 = [
  1,
  2,
  4,
  591,
  392,
  391,
  2,
  5,
  10,
  2,
  1,
  1,
  1,
  20,
  20,
  "6",
  "7"
];
cleanTheRoom(testArr);
cleanTheRoom(mixedArr);
cleanTheRoom(mixedArr2);

// alt version that lists numbers first in a subarray and then strings in a second subarray

function cleanTheRoom2(arr) {
  // add validity check later.
  let finalArray = [[], []];
  let numberCount = {};
  let stringCount = {};

  // check if number, then store in one hash
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (numberCount[arr[i]] > 0) {
        numberCount[arr[i]]++;
      } else if (numberCount[arr[i]] === undefined) {
        numberCount[arr[i]] = 1;
      }
      //check if string, then store in another hash
    } else if (typeof arr[i] === "string") {
      if (stringCount[arr[i]] > 0) {
        stringCount[arr[i]]++;
      } else if (stringCount[arr[i]] === undefined) {
        stringCount[arr[i]] = 1;
      }
    }
  }

  // merge the two objects to get a comprehensive list of all keys in both objects to iterate over
  let allCount = { ...numberCount, ...stringCount };

  // use the "master key" to

  Object.keys(allCount).forEach(key => {
    if (numberCount[key] && numberCount[key] > 1) {
      let tempArray = new Array(numberCount[key]);

      finalArray[0].push(tempArray.fill(Number(key)));
    } else if (numberCount[key] && numberCount[key] == 1) {
      finalArray[0].push(Number(key));
    } else if (stringCount[key] > 1) {
      let tempArray = new Array(stringCount[key]);

      finalArray[1].push(tempArray.fill(key));
    } else if (stringCount[key] == 1) {
      finalArray[1].push(key);
    }
  });

  console.log("answer: ", finalArray);
  return finalArray;
}
let testArr = [2, 2, 2, 2, 3, 4, 4, 7, 9, 0, 1, 1, 7];
// should output [0, [1, 1], [2, 2, 2, 2], 3, [4, 4], [7, 7], 9 ];

// let newA = [[2, 2, 2, 2], 3, [4, 4], 7, 9, 0, [1, 1], 7];
let mixedArr = [1, "2", "3", 2];
let mixedArr2 = [
  1,
  2,
  4,
  591,
  392,
  391,
  2,
  5,
  10,
  2,
  1,
  1,
  1,
  20,
  20,
  "6",
  "7"
];
cleanTheRoom2(testArr);
cleanTheRoom2(mixedArr);
cleanTheRoom2(mixedArr2);
