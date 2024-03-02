const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt'); //joins to a path
console.log(filePath);

const base = path.basename(filePath); //prints the base: ex. test.txt
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); //joins to an absolute path
console.log(absolute);                                                        //using the global variable __dirname