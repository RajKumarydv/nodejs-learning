function firstTask() {
  console.log("First task started");
  secondTask();
  console.log("First task ended");
}

function secondTask() {
  console.log("Second task executed");
}

firstTask();
console.log("Today I learned what Node.js is and how it works!");
console.log("Node.js allows JavaScript to run outside the browser.");