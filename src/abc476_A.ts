import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim();
const [s] = input.split(/\s+/);

console.log(s[s.length - 1] === "e" ? `${s}r` : `${s}er`);