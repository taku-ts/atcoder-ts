import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [s] = input.split(/\s+/);

let ans: string = "";

for(const char of s) {
  ans += char + "o";
}
console.log(ans.slice(0, -1));