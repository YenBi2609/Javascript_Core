// var today = new Date();
// console.log(today);

// function Mouse(color, weight){
//     this.type = 'mouse';
//     this.color = color;
//     this.weight = weight;
// }
// var mouse1 = new Mouse('white',0.2);
// var mouse2 = new Mouse('black',0.5);
// console.log(mouse1);
// console.log(mouse2);

// var tom = {
//     name : 'Tom',
//     stomach : [],
//     eat : function(mouse) {
//         this.stomach.push(mouse);
//         return this;
//     }
// };
// function M(name){
//     this.name = name;
// }
// var m1 = new M('m1');
// var m2 = new M('m2');
// var m3 = new M('m3');


// tom.eat(m1).eat(m2).eat(m3);
// console.log(tom);


/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

// var student = {name: "CodersX",
// sex: "Male",
// age: 1}

// function showInfo(obj) {
//   // viết code ở đây
//   console.log(obj); 

// }
// showInfo(student);


/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        };

   delete student[prop];
    console.log(student);
    }

removeProp('name');


/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

// function countProperty(obj) {
//     // viết code ở đây
//     var count =0;
//     for(var key in obj)
//      count ++;
//      console.log(count);
//   }
//   countProperty({ name: "Herry", age: 10 })

/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

// function Shape(color, shape, fill) {
//     // Your code here
//     this.color = color;
//     this.shape = shape;
//     this.fill = fill;
//   }
  
//   var shape1 = new Shape("red", "rectangle", true);
//   var shape2 = new Shape("orange", "triangle", false);
//   var shape3 = new Shape("tomato", "circle", true);
//   console.log(shape1);


