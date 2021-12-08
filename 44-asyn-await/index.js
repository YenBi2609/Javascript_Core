var fs = require('fs');

function readFilePromise(path){
    return new Promise(function(resole, reject){
        fs.readFile(path, {encoding : 'utf8'}, function(err, data){
          if(err){
              reject(err);
          }else{
              resole(data);
          }
        });
    });   
}
// async-await làm promise dễ dàng hơn để viết
// function return 1 promise , dùng để set sau 1 khoảng time --> trang web thay đổi
// khai báo hàm async ( async make function return a promise), await chỉ có thể sử dụng bên trong hàm async
async function run(){
    var song1 = await readFilePromise('./song1.txt'); // await đi kèm 1 Promise, chờ song1 chạy song --> return a pomise
    var song2 = await readFilePromise('./song2.txt'); 
    return [song1,song2]; // return 1 mảng các P0romise
}
run().then(function(values){
    console.log(values);
});
