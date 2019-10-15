// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArr = array => {
  let placeholder = [];
  array.forEach(arrItem => {
    placeholder.push((arrItem.username = arrItem.username + "!"));
  });
  return placeholder;
};

//Create an array using map that has all the usernames with a "? to each of the usernames

function mappedArr(array) {
  return array.map(arrItem => {
    return arrItem.username + "?";
  });
}

mappedArr(array);

// another alternative: you can set the function to a var and then call it whenever you need it or the values inside
let mapped = mappedArr(array);

//Filter the array to only include users who are on team: red
array.filter(item => {
  if (item.team === "red") return item;
});

//Find out the total score of all users using reduce
array.reduce((accumulator, arrItem) => {
  return accumulator + arrItem.score;
}, 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
});

const newerArray = arr => {
  return arr.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
  });
};

// call it like this
newerArray(arrayNum);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
