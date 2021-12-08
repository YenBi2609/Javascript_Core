// dùng trong trường hợp ko biết bao nhiêu tham số truyền vào
function log(a, ...numbers){
    console.log(a);
    console.log(numbers);
}
log(1,2,3,4);
// rest là những đối số còn lại được truyền vào --> [2,3,4]

function sum(...nums){
    return nums.reduce((a,b) => a+b);
}
console.log(sum(1,2,3,4,5));

function concat(separator, ...string){
   return string.join(separator)
}
console.log(concat('.','a','c','d'))