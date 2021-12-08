// class Mouse {
//     constructor(name){
//         this.name = name;
//     }
//     run(){
//         console.log(`${this.name} is running`);
//     }
// }
// class Bird extends Mouse {
//     run(){
//         console.log('fly');
//     }
// }
// const mouse = new Mouse('Mickey');
// mouse.run();
// const bird = new Bird();
// bird.run();

function Mouse(name){
    this.name = name;
}
Mouse.prototype.run = function(){
    console.log('Running');
}
function Bird(name){
   Mouse.apply(this, arguments);
}
Bird.prototype = new Mouse();
var a = new Bird('bird');
a.run();