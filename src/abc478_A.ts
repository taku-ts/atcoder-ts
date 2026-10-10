import * as fs from "fs";

const [n, m] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const v = Math.floor(m / n);
const r = m % n;
for(let i = 0; i < n; i++) {
  if( i < r) {
    console.log(v + 1);
  } else {
    console.log(v);
  }
}