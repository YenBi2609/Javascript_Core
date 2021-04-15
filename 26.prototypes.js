// // mục đích chính dùng tiết kiệm bộ nhớ
//  function Mouse( color, weight){
//      this.type = 'Mouse';
//      this.color = color;
//      this.weight = weight;
//  }

//  Mouse.prototype.sleep = function(){
//      console.log(this.color + ' Sleeping...');
//  };

//  var jerry = new Mouse('orange', 20);
//  jerry.sleep();


 /*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

// function Student(name, level) {
//     this.name = name;
//     this.level = level;
// }
// Student.prototype.school = 'CodersX'

// var a = new Student("Herry", "01");
// console.log(a.school);


/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
    // Viết code ở đây
    this.diemHoa = diemHoa;
    this.diemLy = diemLy;
    this.diemToan = diemToan;
    
  }
  
  Student.prototype.average = function() {
    // Viết code ở đây
    console.log(Math.ceil((this.diemHoa + this.diemLy + this.diemToan)/3));
  }
  
  var student1 = new Student(6, 7, 7);
  var student2 = new Student(8, 9, 6);
  student2.average();


