// //chay tu trai sang phai tìm thấy => dừng lại, chỉ trả về 1 giá trị
// var a = [1,2,3,4];
// var even = a.find(function(x){
//     return x%2 ===0;
// });
// console.log(even);
// // trả về số chẵn đầu tiên, số 2


/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
    var a = array.find(function(item){
        return item % x === 0;
    });
    console.log(a);
  }
  findDivisibleNum([1, 3, 4], 2);


