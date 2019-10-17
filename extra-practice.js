// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// loop over the array and sort it

// loop again, and store the numbers that have been seen in separate arrays.
// could use reassignment here?
// e.g. if arr[i] === arr[i - 1] then arr[i]

// another thought is to just keep slicing to the end when you find duplicates and somehow add that to the array and then flatten at the end if necessary

// or store the repeats in an obj or separate array and then run filter at the end

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

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// You can see the solution files by other students here
