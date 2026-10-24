import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [, ...arr] = input.split(/\s+/).map(Number);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 1) continue; 
  sum += arr[i];
}
console.log(sum);