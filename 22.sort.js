// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

// function sortNumber(arr) {
//     var a =arr.sort();
//     console.log(a);
//   }
//   sortNumber([5, 1, 3, 2]);

//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
// tang => a-b ; giam => b-a;
// function sortNumber(arr) {
//     // Write code here...
//     var a = arr.sort(function(a,b){
//         return b-a;
//     });
//     console.log(a);
//   }
//   sortNumber([5, 1, 3, 2]);

// Sort an array from shortest string to longest

// function lengthSort(arr) {
//     // Write code here...
//     var a = arr.sort(function(a,b){
//         return a.length - b.length;
//     });
//     console.log(a);
//   }
//   lengthSort(["dog", "wolf", "by", "family", "eaten"]);


// Sort an array alphabetically

// function alphabetical(arr) {
//     var a =arr.sort();
//     console.log(a);
//   }
//   alphabetical(["dog", "wolf", "by", "family", "eaten"]);


// Sort the objects in the array by age

// var arr = [
//     {
//       name: "Quiet Samurai",
//       age: 22
//     },
//     {
//       name: "Arrogant Ambassador",
//       age: 100
//     },
//     {
//       name: "Misunderstood Observer",
//       age: 2
//     },
//     {
//       name: "Unlucky Swami",
//       age: 77
//     }
//   ]
  
//   function byAge(arr){
//     var a =arr.sort(function(a,b){
//         return a.age - b.age;
//     });
//      console.log(a);
//   }
//   byAge(arr);


/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];
  
  function getTopStudents(students) {
    var a = students.sort(function(a,b){
        return b.score - a.score;
    });
    
    var b = a.slice(0,3);
    // lấy ra tên cái đối tượng trong mảng => dùng map
    var c = b.map(function(x){
        return x.name;
    });
    console.log(c);
  }
  getTopStudents(students);





