// Solve the below problems:

// #1) Convert the below promise into async await
const fetchSwapi = async function() {
  await fetch("https://swapi.co/api/starships/9/")
    .then(response => response.json())
    .then(console.log);
};

//or
const swapi = async function() {
  try {
    const deathStar = await fetch("https://swapi.co/api/starships/9/");
    return deathStar.json();
  } catch (err) {
    return console.log("ooops", err);
  }
};

fetch("https://swapi.co/api/starships/9/")
  .then(response => response.json())
  .then(console.log);

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  const [users, posts, albums] = await Promise.all(
    urls.map(url => fetch(url).then(resp => resp.json()))
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];
