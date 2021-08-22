var fs = require('fs');
// console.log('Start');
// console.log(fs.readFileSync('song1.txt',{encoding : 'utf8'}));
// console.log(fs.readFileSync('song2.txt',{encoding : 'utf8'}));
// console.log("End");

// sync : đồng bộ, làm xong việc 1 mới làm việc 2
// async : ko đồng bộ, làm song song các việc trên 1 luồng / khác java là chạy đa luồng

console.log('Start');
console.log(fs.readFile('song1.txt',{encoding : 'utf8'}, function(err, song1){
    console.log(song1);
})); // async

console.log("End");
// end được print ra trước song 1
// sd trong read/write file, network