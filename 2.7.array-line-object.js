// var a = {
//     0: 'Yen',
//     1: 'Trang',
//     3: 'Thanh',
//     length : 3
// }
// function sum() {
//     console.log(arguments.length); // arguments là array-line object // luôn tồn tại trong scope của hàm, ko cần khai báo
//     let result = 0;
//     for(let i = 0; i <arguments.length; i++){
//         result += arguments[i];
//     }
//     const number = Array.from(arguments); // chuyển đổi array object thành 1 array
//     return number.reduce(function(sum,num){
//         return sum + num;
//     }, 0);


//     // return result;
// }
// console.log(sum(1,2,3));
/// defaul parameters
function a(name = 'b'){
    // if(name === undefined){
    //     name ='b';
    // }
    return `Hi, ${name}!`
}
console.log(a())