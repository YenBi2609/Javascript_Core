// value type and reference type
let a1 = 1;
let a2 = 1;
console.log(a1 === a2);
let obj1 = { a: 1}; // object là reference type, khi khởi tạo biến --> tạo không gian lưu trữ mới
let obj2 = { a: 1};
console.log(obj1 === obj2); // --> false

let a3 = a2;
a3 = 2;
console.log(a2);

let obj3 = obj2; // gán biến = 1 object or array --> gán tham chiếu đến object --> thay đổi giá trị obj3 sẽ thay đổi obj2
obj3.a = 2;
console.log(obj2);
// --> ko nên thay đổi đầu vào khi nó là object