function a(){
   console.log(`hi, ${this.name}`);
}
const cat = {
    name: 'tom',
    age: '100'
}
a.call(cat);

function sum() {
    const number = Array.from(arguments); // chuyển đổi array object thành 1 array
    return number.reduce( (sum,num) => sum + num, 0);
}
function average(){
    const x = sum.apply(null, arguments); // mục đích gọi hàm ko biết bao nhiêu đầu vào
    console.log(x/arguments.length);
}
console.log(sum(1,2,3,5))
average(1,2,3,6);