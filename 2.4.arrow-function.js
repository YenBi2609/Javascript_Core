// function sum(a,b) {
//     return a +b;
// }
// console.log(sum(1,2));

// var sum2 = function (a,b) {
//     return a +b;
// }
// console.log(sum2(3,2));

// var sum3 = (a,b) => {
//     return a+b;
// }
// console.log(sum3(4,2));

// var sum4 = (a,b) => a+b // return a + b
// console.log(sum3(5,2));

// var sum4 = x => x*x; // 1 tham số --> ko cần viết ()
// console.log(sum4(5));
// // ko có tham số phải có ngoặc hàm ()
// var arr = [1,2,3]
// var a  = arr.map(x => x*x)
// console.log(a);

var  a ={
    name: 'AAA',
    run: function(){
        console.log(this.name);
        var run2 =  () => { // arrow function ko có biến this ( context) --> this bên trong sẽ kế thừa thằng ở ngoài gần nó nhất
            console.log(this.name); // global context --> indefine
        }; // this là a
        run2();
    }
};
a.run();
// var a = {
//     foo: 'bar',
//     run: function() {
//         setTimeout(function() {
//             console.log(this.foo); // this ko phải a, là global context
//         }.bind(this), 2000);
//     }
// };
// a.run();