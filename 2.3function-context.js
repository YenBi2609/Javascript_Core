// global context
// function context
// bind
var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi, my name is ', this.name);
    }
};
var cat = {
    name: 'Tom'
}
mouse.sayHi(); // context của sayHi là mousse
var say = mouse.sayHi.bind(cat); // gán function vào 1 biến --> say là 1 function
// bind truyền vào 1 object
say(); // nếu ko có bind -> this sẽ là global context vì ko được gán với object nào cả