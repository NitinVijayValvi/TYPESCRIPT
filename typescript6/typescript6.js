var student = /** @class */ (function () {
    function student(rollno, name, totalmarks, classname) {
        this.rollno = rollno;
        this.name = name;
        this.totalmarks = totalmarks;
    }
    return student;
}());
var sortbytotalmarks = function (student) {
    return student.sort(function (s, s2) {
        return s.totalmarks - s2.totalmarks;
    });
};
sortbytotalmarks([{ rollno: 10, name: 'nitin', totalmarks: 96, classname: 'btech' },
    { rollno: 20, name: 'mayur', totalmarks: 99, classname: 'btech' },
    { rollno: 30, name: 'bhushan', totalmarks: 94, classname: 'btech' },
    { rollno: 40, name: 'jaydip', totalmarks: 97, classname: 'btech' },
    { rollno: 50, name: 'rushikesh', totalmarks: 99, classname: 'btech' }]);
console.log(sortbytotalmarks.totalmarks);
