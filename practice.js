const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("it worked!");
  } else {
    reject("error! it did not work");
  }
});

promise
  .then(result => result + " some action taken on returned result")
  .then(
    secondResult => secondResult + " some action taken on the second result"
  )
  .catch(error => console.log("an error occurred", error));

// e.g. the Promise.all()
const oneSec = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "One second resolved");
});

const twoSec = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "One second resolved");
});

const fiveSec = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "One second resolved");
});

Promise.all([oneSec, twoSec, fiveSec]).then(values => {
  console.log(values);
});

// Async await version
async function doThis() {
  try {
    await doThat();
    await doThisOtherThing();
    await writeToTheDom();
  } catch (error) {
    alert(error);
  }
}
