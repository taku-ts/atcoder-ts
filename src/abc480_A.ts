import * as fs from "fs";

const arr = fs.readFileSync(0, "utf8").trim().split("").filter(
  (c) => c !== "\n" && c !== "\r"
).map((c) => {
  if (c === "A" || c === "D") {
    return "O";
  } else return c;
});

if (arr[0] === "O" && arr[3] === "O" || arr[1] === "O" && arr[2] === "O") {
  console.log("No");
} else {
  console.log("Yes");
}