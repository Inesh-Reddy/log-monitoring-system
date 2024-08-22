const fs = require("fs");

console.log("message: log and monitoring system is up and running.....🏃🏃");

let data;
fs.readFile("./logs/logfile.txt", "utf-8", function (_err, data) {
  console.log(data);
});
console.log("Successfully logged data.....");
