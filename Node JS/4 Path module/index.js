const path = require('path');

console.log("Directory name: ", path.dirname(__filename));

console.log("File name: ", path.basename(__filename));

console.log("File extension: ", path.extname(__filename));

const joinPath = path.join('/user', 'test', 'hello.html');
console.log("Join path: ", joinPath);

const resolvePath = path.resolve('/user','test', 'hello.html');
console.log("Resolve path: ", resolvePath);

const normalizePath = path.normalize('/user//test/hello.html');
console.log("Normalize path: ", normalizePath);