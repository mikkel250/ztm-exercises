//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const addTwo = (a, b) => a + b;
addTwo(1, 5);
// Closures explanation:
// the child scope always has access to the variables in the parent scope
// the web browser will remember the reference to a variable inside of a parent function if it's needed later, even if technically that parent function is no longer needed. E.g.
const first = () => {
  const greet = "hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
// so even tho newFunc technically is now equal to

// const newFunc = const second = () => {
//   alert(greet);
// }

// the web browser will remember the const greet even tho it was in the parent function which already ran

// put another way (Andrei's)
// the function ran.The function executed.It's never going to run again.
// BUT it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3); // 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
curriedSum(30)(1); //31

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
const add5 = curriedSum(5);
add5(12); // 17

//Composing: What does the last line return?
const compose = (f, g) => a => f(g(a));
const add1 = num => num + 1;
const add5 = num => num + 5;
compose(
  add1,
  add5
)(10);

//What are the two elements of a pure function?
//input and output i.e. the same input will always return same output
