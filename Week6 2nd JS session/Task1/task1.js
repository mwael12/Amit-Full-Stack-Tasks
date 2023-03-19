// 1- We need a function that can transform a number into a string.


function numberToString(number) {
    var arrOfStrs = Array.from(String(number));
    var arrOfNums = arrOfStrs.map((str) => Number(str));
    return arrOfStrs.join("")
}


var num = 15
console.log(numberToString(num));

