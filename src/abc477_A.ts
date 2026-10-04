import * as fs from "fs";

const s = fs.readFileSync(0, "utf8").trim();

let ans = "Y";

switch (s) {
  case "Y":
    ans = "R";
    break;
  case "R":
    ans = "B";
    break;
}
console.log(ans);