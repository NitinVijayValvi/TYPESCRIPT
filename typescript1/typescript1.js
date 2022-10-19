/* var sum = (x:number,y:number,z:number): number => {
        return	x+y+z;
}
console.log(sum(20,25,30));
 */
var temp;
var min = function (x, y, z) {
    {
        if (x < y) {
            if (x < z) {
                temp = x;
            }
            else {
                temp = z;
            }
        }
        else {
            if (y < z) {
                temp = y;
            }
            else {
                temp = z;
            }
        }
        return temp;
    }
};
console.log(min(20, 30, 40));
