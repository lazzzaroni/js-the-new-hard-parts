// http://csbin.io/promises

// Challenge 1

function sayHello() {
  setTimeout(() => console.log("Hello"), 1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(resolve("Resolved!"), 1000);
});

// Should print out "Resolved!"
// Uncomment the line below
// promise.then((res) => console.log(res));

// Challenge 3

promise = new Promise(function (resolve, reject) {
  reject("Rejected!");
});

// Should print out "Reject!"
promise.catch((err) => console.log(err)); // should stay uncommented

// Challenge 4

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve("Promise has been resolved!");
});

// Uncomment the lines below when ready
// promise.then(() => console.log("Promise has been resolved!"));
// console.log("I'm not the promise!");

// Challenge 5
function delay() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 0);
  });
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);

// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise(function (resolve, reject) {
  resolve("Second!");
});
var firstPromise = new Promise(function (resolve, reject) {
  resolve(secondPromise);
});

// Uncomment the line below
// firstPromise.then((res) => console.log(res));

// Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  const apiCalls = [];
  for (let i = 0; i < fakePeople.length; i++) {
    apiCalls.push(fakeAPICall(i));
  }
  return Promise.all(apiCalls).then((data) => console.log(data));
}

// Uncomment the line below
// getAllData();
