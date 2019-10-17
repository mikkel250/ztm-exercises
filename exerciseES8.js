// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");
// will append the character instead of a space. The drawback is that you can't use trim() to get rid of them later

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer"
};
// to this:
("my name is Rudolf the raindeer");

// WRONG - it must be some other type of loop
for (item in obj) {
  console.log(item.key, item);
}

// Correct
Object.entries(obj)
  .flat(2)
  .join(" ");
