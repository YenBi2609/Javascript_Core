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
// function return 1 promise , dùng để set sau 1 khoảng time --> trang web thay đổi
async function run(){
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt'); // await make song2 chờ song 1 chạy xong ( return a promise)
    return [song1,song2];
}
run().then(function(values){
    console.log(values);
});
