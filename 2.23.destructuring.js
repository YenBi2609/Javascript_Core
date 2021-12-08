const arr = [1,2,3,6,9];
const [a, , , d] = arr;
console.log(a,d);

const obj = {
    a: 1,
    b: 2,
    c: 3
};
const {a:e, ...f} = obj;
console.log(e,f);

