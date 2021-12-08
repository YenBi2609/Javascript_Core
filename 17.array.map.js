// var a = [1,2,3,4];
// var squareA = a.map(function(x){
//     return x*x;
// });
// console.log(squareA);
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

// function tripple(num) {
//     // Write code here...
//     return num*3;
//   }
  
//   function multiply(numbers) {
//     // Write code here...
//     var a  = numbers.map(tripple);
        
//     console.log(a);
//   }
// multiply([1,2,3]);

// Use array map make an array of strings of the names

var users = [
    {
      name: "Angelina Jolie",
      age: 80
      
    },
    {
      name: "Eric Jones",
      age: 2
      
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
      
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ]
  
  function namesOnly(arr) {
    // Write code here...
    
    var a = arr.map(function(i){
            return i.name ;
    });
    console.log(a);
  }
  namesOnly(users); 
function readyToPutInTheDOM(arr) {
    // Write code here...
    
    var a = arr.map(function(user){
         return '<h1>'+ user.name + '</h1><h2>' + user.age + '</h2>';
    });
    console.log(a);
    
  }
  readyToPutInTheDOM(users);