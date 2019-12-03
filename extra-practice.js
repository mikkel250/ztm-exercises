// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// loop over the array and sort it

// loop again, and store the numbers that have been seen in separate arrays.
// could use reassignment here?
// e.g. if arr[i] === arr[i - 1] then arr[i]

// another thought is to just keep slicing to the end when you find duplicates and somehow add that to the array and then flatten at the end if necessary

// or store the repeats in an obj or separate array and then run filter at the end

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

// ^ tested, works

function cleanTheRoom(arr) {
  // add validity check later. for now set the compare val to first element and create a new array to store the slices
  let lastNum = arr[0];
  let newArr;

  // start at index 1 bc the lastNum is set to 1st element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == lastNum) {
      console.log(`found ${arr[i]}`);
      newArr = arr.slice(arr[i - 1], arr[i]);
      console.log(newArr);
    }
  }
}

for (item in arr) {
  item => {
    console.log(item + 1);
  };
}

for (item of arr) {
  console.log(`item ${item}, item + 1 ${item + 1}`);
}

// ANOTHER APPROACH

// Loop over

// Store the starting index of multiples, the value of the element, and the number of occurrences in an array (or just 3 variables), incrementing the numOfOccurrences each time there is a match

// Use an if statement to check if it encounters a new value

// the delete operator to remove the multiples once true

// In the same if statement, replace the first element(since it's been saved) with an array containing the value and number of occurrences

// Then use either filter or Symbol to remove the undefined values from the array.

function removeRepeatedElements(array, hashMapOfRepeatedElements) {
  //look up the delete method to see if it's used like slice or splice...also, it might be smarter to use splice here if it will contain all the removed elements..one less step
  array.delete(hashMapOfRepeatedElements.startingIndex, matches.occurrences);
}

function checkMatches(array, hashMapOfRepeatedElements) {}

let testArr = [2, 2, 2, 2, 3, 4, 4, 7, 9, 0, 1, 1, 7];
let newA = [[2, 2, 2, 2], 3, [4, 4], 7, 9, 0, [1, 1], 7];
function cleanTheRoom2(arr) {
  let matches = {
    startingIndex: undefined,
    num: undefined,
    occurrences: 0
  };
  // need to plan for resetting it or checking
  for (let i = 0; i < arr.length; i++) {
    console.log(`round ${i}`);
    //check if elements repeat

    //check if same, and already been logged the same and number and add to hashmap if not...WILL NEED TO ADD SOME CONDITION THAT PREVENTS DELETING THE NUMBERS IF THIS IS THE FIRST ASSIGNMENT..MAYBE AN IF INSIDE HERE THAT CHECKS BEFORE DELETING ELEMENTS
    if (arr[i] === arr[i - 1] && matches.num !== arr[i]) {
      console.log(
        `matches found to be different. setting matches.startingIndex`
      );
      // add the delete/replace elements here, and then reset the hash when the next match is found
      if (matches.index !== undefined || matches.index > 0) {
        console.log(
          `inside if to check if this is the first repeating elements. want to delete in this case`
        );
        console.log(`deleting elements would go here`);
        arr.delete(matches.startingIndex);
        let removedElements = arr.slice(matches.startingIndex, matches.count);
        arr[matches.index] = removedElements;
        arr.splice(matches.startingIndex + 1, matches.count - 1);
      }

      matches.startingIndex = i - 1;
      matches.num = arr[i];
      matches.occurrences = 2;
      console.log(
        `hashmap set to ${matches.startingIndex}, ${matches.num}, ${matches.occurrences}`
      );
      // but if the numbers are the same and it's already in the hash, then just increment the occurrences
    } else if (arr[i] === arr[i - 1] && matches.num === arr[i]) {
      console.log(`updating only occurrences`);
      matches.occurrences++;
    }
    // console.log(matches);

    // run a second if loop to check matches if the two numbers in the array are not matching, and reset the matches hash (turn this into a function later)  THIS IS PROBABLY NOT NECESSARY -- THE VALUES CAN STAY INSIDE THE HASH AND WILL BE OVERWRITTEN IF NOT. The question then is how to then delete the repeats...

    // if (matches.startingIndex && arr[i] != arr[i - 1]) {

    // }
  }
}

cleanTheRoom2(testArr);

// FINALLY FIGURED OUT THE METHOD TO DO THIS!!

// This version pushes the first array fine but the rest of the matches only push a single item
let testArr = [2, 2, 2, 2, 3, 4, 4, 7, 9, 0, 1, 1, 7];
function cleanTheRoom3(arr) {
  let newArr = [null];
  let last = newArr.length - 1;
  for (let i = 1; i < arr.length; i++) {
    console.log(`round ${i} of for loop`);

    if (arr[i] === arr[i - 1]) {
      console.log(`found match`);

      // this null is just to get the first push to work properly
      if (newArr[last] === null) {
        console.log(`newArr length < 1, pushing array of 2 items`);
        newArr.push([arr[i], arr[i - 1]]);
        newArr.shift(0); // must remove the first element here
        // this is not pushing properly
      } else if (newArr[last] instanceof Array && newArr[last][0] === arr[i]) {
        console.log(`newArr last element match, pushing to newArr[last]`);
        newArr[last].push(arr[i - 1]);
      }
      // NEED TO ADD ELSE IF TO PUSH THE __PAIR__ IF THERE IS A MATCH AND NO ARRAY OF MATCHES ALREADY!
    } else {
      console.log(`else - pushing this item`);
      newArr.push(arr[i - 1]);
    }
    console.log(`newArr at end of for loop round ${newArr}`);
  }
  return newArr;
}

cleanTheRoom3(testArr);

// note: round 6 is when the jpush fails (above)

// MAKE A NEW ARRAY

// START LOOPING @ INDEX 1

// IF !MATCH newArr.push(arr[i])
// IF MATCH PUSH [arr[i-1], arr[i]] (or just use the method to push 2 identical items in)
// then check if newArr[-1] is an array, if it is, push into the inner array, otherwise push i (can add this check to the above line or make an inner if check before the push)

// return the newArr

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// You can see the solution files by other students here
