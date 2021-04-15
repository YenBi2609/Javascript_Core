// lưu module có sẵn trong npm
// C:\Users\admin\Desktop\TuHocJs\node built-in module\31-npm>npm init
// C:\Users\admin\Desktop\TuHocJs\node built-in module\31-npm>npm install readline-sync --save



var readlineSync = require('readline-sync');
 

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');