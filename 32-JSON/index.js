// JSON object, json là 1 string
// stringify - convert an object to a JSON string
// parse - convert a JSON to an object
// var myDog = {name : 'Milu', age : 1, dead : false};
// var myDogString = JSON.stringify(myDog);

// console.log(myDogString);
// console.log(typeof myDogString);

// var myCatString = '{"name":"Tom","age":2,"dead":true}';
// var myCat = JSON.parse(myCatString);

// console.log(myCat);

/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

// var readlineSync = require('readline-sync');
// var fs = require('fs');

// var myReadString = fs.readFileSync('./data.json', { encoding: 'utf8'});
// var myRead = JSON.parse(myReadString);
// console.log(myRead.name);

// myRead.members = [];

// while(true){
//     var options = readlineSync.question('What is your option?');
//     if( options == 1){
//         console.log(fs.readFileSync('./data.json', { encoding: 'utf8'}));
//     }
//     if( options == 2){
// let me ={};
// me.name = readlineSync.question('name?');
// me.gender = readlineSync.question('gender?');
// me.age = readlineSync.question('age?');

// myRead.members.push(me);
// fs.writeFileSync('./data.json',JSON.stringify(myRead));
//      }

// if( options == 3){
//     break;
// }
// }


