var readlineSync = require('readline-sync');
 

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// npm : node package manager
// cài đặt package của cộng đồng
// npm init
// npm install readline_sync --save