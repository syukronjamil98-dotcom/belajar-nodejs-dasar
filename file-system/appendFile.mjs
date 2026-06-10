import fs from "fs/promises";

await fs.appendFile("file.txt", "\nMenambahkan ilmu node.js");

console.log("Teks berhasil ditambahkan");
