import * as fs from "fs";

const s = fs.readFileSync(0, "utf8").trim();

console.log(s.endsWith("e") ? `${s}r` : `${s}er`);