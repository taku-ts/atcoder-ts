import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [, ...arr] = input.split(/\s+/).map(Number);

let sum = 0;
for (let i = 0; i < arr.length; i += 2) {
  sum += arr[i];
}
console.log(sum);