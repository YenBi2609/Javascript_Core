const a = [1,2,3];
const b = [0, ...a, 4];
console.log(b);
// rest gom các giá trị lại thành 1 array
// spread trải các giá trị của array ra thành các phần tử
// spread object
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {e: 10}
}
let obj2 = {
    ...obj1,
    z: 1000
};
for(let key in obj1){
    obj2[key] = obj1[key];
}
obj2.d.e = 5;
// deep clone để tránh trường hợp cùng tham chiếu đến 1 object
console.log({obj1,obj2});