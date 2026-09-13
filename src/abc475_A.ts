import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const s = input.split(/\s+/);

let ans: string = s[0].split("").join("o");

console.log(ans);