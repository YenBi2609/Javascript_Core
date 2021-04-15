// var a = [1,2,3,4];
// var even = a.filter(function(x){
//     return x%2 ===0;
// });
// console.log(even);

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// function fiveAndGreaterOnly(arr) {
//     // your code here
//     var a= arr.filter(function(x){
//         return x >= 5;
//     });
//     console.log(a);
//   }
//   fiveAndGreaterOnly([3, 6, 8, 2]);


// Given an array of numbers, return a new array that only includes the even numbers.
// function evensOnly(arr) {
//     var a = arr.filter(function(x){
//         return x % 2 ===0;
//     });
//    console.log(a);
//   }
//   evensOnly([3, 6, 8, 2]);

/**
 * Give a list of students, filter out non-female 
 */
 
var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
// your code here!
   var a = members.filter(function(x){
       return x.gender !== 'female';
   });
   console.log(a);
}
filterOutFemales(members);









  