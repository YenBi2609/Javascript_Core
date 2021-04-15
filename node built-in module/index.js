// var fs = require('fs'); // module fs đã đc lưu sẵn trong node js

// var text = fs.readFileSync('./song.txt', { encoding: 'utf8'});   // method của module
// console.log(text);

// fs.writeFileSync('./song-2.txt', 'I am Yen');


/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: https://nodejs.org/dist/latest-v8.x/docs/api/path.html#path_path_extname_path
 */

// require module here!
var path = require('path');

function getExtension(fileName) {
  // your code here!
  var a = path.extname(fileName);
  console.log(a);
}
getExtension('index.md');


