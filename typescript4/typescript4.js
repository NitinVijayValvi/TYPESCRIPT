var arraysort = function (arr) {
    var _a;
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
};
console.log(arraysort([11, 2, 15, 34, 22, 27, 9]));
//console.log(arraysort)
