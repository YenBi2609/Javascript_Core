// math object
// Math.PI
// Math.ceil(number) làm tròn lên
// Math.floor(number) làm tròn xuống
// Math.round(number) trả về số nguyên gần nhất
// Math.max(x1,x2,...)
// Math.min(x1,x2,...)
// Math.random()

// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

// function powerup(arr) {
//     // your code here!
//     var b =[];
//     var a = arr.map(function(x){
//         if( x % 2 === 0)
//         b.push(Math.pow(x,2));
//         else b.push(x);
//     });
//     console.log(b);
//   }
// powerup([0, 3, 6, 7, 4]);

/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

// function average(arr) {
//     var a = arr.reduce(function(a,b){
//         return a+b;
//     });
//     var b = arr.length;
//     console.log(Math.round(a/b));

//   }
//   average([8, 8 , 6.75]);

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

// function positiveNumber(arr) {
//     var a = arr.map(function(x){
//         return Math.abs(x);
//     });
//     console.log(a);
//   }
//   positiveNumber([-2, 3, -4, -7, 10]);

// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

// function random() {
//     // your code here!
//    console.log(Math.random() * 100); 
//   }
//   random();

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

// function rightTriangle(a, b, c) {
//   // your code here
//   if (a<b+c && b<a+c && c<a+b) {
//   if( a*a + b*b == c*c || a*a+c*c == b*b || b*b +c*c == a*a)
//  console.log(true);
//   else console.log(false);
// } else console.log(false);}
// rightTriangle(3, 4, 5);
//   rightTriangle(3, 4, 5);
//   rightTriangle(33, 67, 43);


/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

// function circumferenceOfCircle(r) {
//   // your code here!
//   return 2*r*Math.PI;
// }
// function acreageOfCircle(r) {
//   //your code here!
//   return r*r*Math.PI;
// }

// numObj.toFixed([digits]) digits số chữ số xuất hiện sau dấu phẩy
// * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
//  * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
//  * Gợi ý: Sử dụng toFixed() method
// */

function trigonim(number) {
  var a =[];
  a.push(Math.sin(number).toFixed(3));
  a.push(Math.cos(number).toFixed(3));
  a.push(Math.tan(number).toFixed(3));
console.log(a);
}
trigonim(30);












  





