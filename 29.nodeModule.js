// mục đích chia nhỏ các file cho code đỡ dài
// file math.js
var math = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  module.exports = math;

// file index.js
/**
 * 1. Require module math
 * 2. Sử dụng method `add` để tính tổng 2 số bất kì
 * 3. Log ra kết quả phép tính tổng ở trên
 */
var math = require('./math');
math.add(1,2);





// file index.js
/**
 *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
 *  4. Test thử
 */
var Circle = require('./Circle');
var circle1 = new Circle(0, 0, 1);
var circle2 = new Circle(0, 2, 1);
console.log(circle1.isOverlapped(circle2));

var circle3 = new Circle(0, 0, 3);
console.log(circle1.isOverlapped(circle3));

var circle4 = new Circle(5, 5, 1);
console.log(circle1.isOverlapped(circle4));

// file Circle.js
function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

};
Circle.prototype.isOverlapped = function(c) {
  var d = Math.sqrt(Math.pow(this.x - c.x, 2) + Math.pow(this.y - c.y, 2));
  if (d == this.r + c.r) {
    return 0;
  }
  if (d < this.r + c.r) {
    return -1;
  }
  return 1;
}
module.exports = Circle;