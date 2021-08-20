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
//     return fs.readFile(path, {encoding : 'utf8'});
// }
// readFile('song1.txt')
// .then(onDone)
// .then(function(){
//     return readFile('song2.txt');
// })
// .then(onDone)
// .catch(onError);

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

// readFilePromise('song1.txt')
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

Promise.all([
    readFilePromise('./song1.txt'), // resoled
    readFilePromise('./song2.txt') // resolved 
]).then(function(values){
    console.log(values);
}).catch(function(error){
    console.log(error);
});
// async