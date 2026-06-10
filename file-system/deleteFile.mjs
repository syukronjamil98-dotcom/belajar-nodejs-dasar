import fs from "fs/promises";

await fs.unlink("file.txt");

console.log("File berhasil dihapus");
