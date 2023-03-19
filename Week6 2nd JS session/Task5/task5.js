// 5- Write a function to reverse a number .
// input : 123 // output: 321


function reverseNumber(number) {
    //cast Number to String. 
    var arrOfStrs = Array.from(String(number));
    var arrOfNums = arrOfStrs.map((str) => Number(str));

    //Reversing.
    reversed = []
    for (var i = arrOfNums.length-1; i >= 0 ; i--){  
        reversed.push(arrOfNums[i])
    }
    return reversed.join("")
}

var num = 589647;


console.log(reverseNumber(num)); 


