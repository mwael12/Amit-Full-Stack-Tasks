// 4. Write a JS code to print a pattern using for loop like:
// /* 1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5
//    1 2 3 4 5 6
//    1 2 3 4 5 6 7
//    1 2 3 4 5 6 7 8 */


var x = 8
var y= ""

for (var i = 1; i <=x; i++){
    y = y + i
    console.log(y)
    document.write(`<h2>${y}</h2>`)
}
