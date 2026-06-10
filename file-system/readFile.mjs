import fs from "fs/promises";

const isian = await fs.readFile("file.txt", "utf-8");

console.log(isian);
