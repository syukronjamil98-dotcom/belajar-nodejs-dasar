import fs from 'fs/promises';

await fs.writeFile('file.txt', 'Hello, World!')

console.log('File created successfully!');