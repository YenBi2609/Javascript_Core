/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

// var listProducts = [
//     {id: 1, categoryId: 1, name: 'Tivi'},
//     {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//     {id: 3, categoryId: 3, name: 'Ghế sofa'},
//     {id: 4, categoryId: 1, name: 'Máy giặt'},
//     {id: 5, categoryId: 2, name: 'Chén bát'},
//     {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//     {id: 7, categoryId: 3, name: 'Cửa kính'},
//     {id: 8, categoryId: 1, name: 'Điều hoà'},
//     {id: 9, categoryId: 3, name: 'Bàn tròn'},
//     {id: 10, categoryId: 2, name: 'Lò vi sóng'},
//    ]
   
//    function filterProductsByCategoryId(products, categoryIds) {
//      var a = products.filter(function(x){
//          return x.categoryId === categoryIds;
//      });
//      console.log(a);
//    }
//    filterProductsByCategoryId(listProducts, 1);

   /**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/


function removeDuplicate(array) {

    var d = array.filter(function(x,pos){
        return array.indexOf(x) == pos;
    });
    console.log(d);
    var a = [];
    var d= array.sort();
    for( var i =0 ; i < d.length; i++){
     if( d[i] !== d[i+1])
         a.push(d[i]);
        }
     console.log(a);

  }
  removeDuplicate([1,2,1]);

  /**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  // viết code ở đây.

var occurrences = arr.reduce(function(obj, item) {
  obj[item] = (obj[item] || 0) + 1;
  return obj;
}, {});


console.log(occurrences);      
}
countOccurrences(['a', 'b', 'c', 'b', 'a']);


