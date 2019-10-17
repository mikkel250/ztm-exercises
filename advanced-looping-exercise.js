const basket = ["apples", "oranges", "grapes"];


//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
});

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray(arr) {
  let biggestNum = 0;
  if (typeof arr[0] === "number" && arr.length > 0) {
    console.log(`setting biggestNum to ${arr[0]}`);
    biggestNum = arr[0];
    // } else {
    //   console.log(`arr[0] is ${arr[0]}, returning 0`)
    //     biggestNum = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > biggestNum) {
      console.log(`biggestNum ${biggestNum}, arr[i] ${arr[i]}`);
      biggestNum = arr[i];
    }
  }
  console.log(`return from ${arr} is ${biggestNum}`);
  return biggestNum;
}

biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);

const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray2(arr) {
  let biggestNum = 0;
  arr.forEach(item => {
    if (typeof item === "number" && item > biggestNum) {
      biggestNum = item;
    }
  });
  return biggestNum;
}

biggestNumberInArray2(array);
biggestNumberInArray2(array2);
biggestNumberInArray2(array3);

const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray3(arr) {
  let biggestNum = 0;
  for (item of arr) {
    if (typeof item === "number" && item > biggestNum) {
      biggestNum = item;
    }
  }
  return biggestNum;
}

biggestNumberInArray3(array);
biggestNumberInArray3(array2);
biggestNumberInArray3(array3);

// Objects
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};


for (item in detailedBasket) {
  console.log(item);
}

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
};

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    console.log(item);
    if (item == lookingFor) {
      return item; // or return true or whatever
    } else {
      return "not found";
    }
  }
}

checkBasket(amazonBasket, "glasses");
checkBasket(amazonBasket, "baby");
