var fs = require('fs');
var co = require('co');

function readFilePromise(path){
    return new Promise(function(resole, reject){  // trả về 1 promise, promise nhận vào 1 hàm duy nhất, hàm có 2 tham số, resole được gọi khi promise(hàm truyền vào) thực hiện xong 1 việc nào đó, reject được gọi khi hàm bị lỗi


        fs.readFile(path, {encoding : 'utf8'}, function(err, data){
          if(err){
              reject(err); // được truyền vào hàm catch
          }else{
              resole(data); // được gọi đã đọc file xong, resole được gọi với data, data được truyền vào hàm bên trong then(dòng 50)
          }
        });
    });
    
}
// bên trong hàm giải quyết vấn đề không đồng bộ, chờ file 1 đọc xong mới đến file 2, còn bên ngoài hàm sẽ ko cần chờ
// gần giống promise all
co(function*(){ // hàm co truyền vào 1 function
    //  var song1 = yield readFilePromise('./song2.txt');    // đn trả về 1 promise
    //  var song2 = yield readFilePromise('./song1.txt');
    //  var song3 = yield readFilePromise('./song4.txt');
    var values = yield [
        readFilePromise('./song1.txt'),
        readFilePromise('./song3.txt'),
        readFilePromise('./song2.txt')
    ];
    //  return [song1,song2,song3]; // trả về 1 promise
    return values;
}).then(function(values){
    console.log(values);
}).catch(function(err){
    console.log(err);
})
// cach dùng khác  : muốn khai báo trc, dùng sau
var readFiles = co.wrap(function*(files){ // co.wrap trả về 1 hàm ( hàm trả về promise), truyền vào 1 array,
    // [String] --> [Promise]
    var values = yield files.map(function(file){ // biến array chứa các string thành 1 array chứa các promise
          return  readFilePromise(file);
    });
    return values;
})

readFiles(['song1.txt','song2.txt','song3.txt'])
.then(function(values){
    console.log(values);
});