// constructor funtion : Promise --> tạo ra instance bằng từ khóa New

// module : promise-fs
// install module
// npm init
// npm i --save promise-fs

// var fs = require('promise-fs');

// function onDone(song){
//     console.log(song);
// }

// function onError(error){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path, {encoding : 'utf8'});  // hàm này trả ra 1 promise, promise đó 2 method chính : then, catch
// then nhận vào 1 function ( callback ) --> then chạy xong cũng trả về chính promise đó 
// catch nhận vào 1 hàm được gọi khi có lỗi ( file ko tồn tại ...)
// dùng promise mục đích kiểm soát bất đồng bộ
// }
// readFile('song1.txt')
// .then(onDone) // đọc file 1 song --> trả về file 1
// .then(function(){
//     return readFile('song2.txt'); // đọc file 2 trả về promise của file 2 ( phải có return trả về promise) // ko return --> trả về undefined
// })
// .then(onDone)  //file 2 chạy xong mới chạy đến hàm này // hàm trên phải trả về 1 promise thì hàm này mới đợi, ko phải promise sẽ chạy thằng qua luôn
// .catch(onError);

var fs = require('fs');
// hàm phải làm 1 cviec ko đồng bộ--> sd promise giải quyết việc k đồng bộ
// tạo hàm --> trả về promise --> gọi resole, reject
function readFilePromise(path){
    return new Promise(function(resole, reject){  // trả về 1 promise, promise nhận vào 1 hàm duy nhất, hàm có 2 tham số, resole được gọi khi promise(hàm truyền vào) thực hiện xong 1 việc nào đó, reject được gọi khi hàm bị lỗi


        fs.readFile(path, {encoding : 'utf8'}, function(err, data){
          if(err){
              reject(err); // được truyền vào hàm catch 
          }else{
              resole(data); // được gọi khi đã đọc file xong, resole được gọi với data, data được truyền vào hàm bên trong then(dòng 50)
          }
        });
    });
    
}

// readFilePromise('song1.txt') // hàm này phải trả về promise để có thể dùng đc hàm then phía dưới
// .then(function(song1){
//     console.log(song1);
// })
// .catch(function(error){
//     console.log(error);
// });


// readFilePromise('./song1.txt')
// .then(function(song1){
//     console.log(song1);
//     return readFilePromise('./song2.txt');
// })
// .then(function(song2){
//     console.log(song2);
//     return readFilePromise('./song1.txt');
// })
// .catch(function(error){
//     console.log(error);
// });

// dùng để gọn code khi đọc nhiều file, ko quan tâm thứ tự chạy của các file
Promise.all([ // nhận vào 1 array gồm các promise --> trả về 1 mảng các promise resole ra
    readFilePromise('./song1.txt'), // resoled
    readFilePromise('./song2.txt') // resolved 
]).then(function(values){ // then được gọi khi cả 2 promise trên đc resole
    console.log(values);
}).catch(function(error){ // 
    console.log(error);
});