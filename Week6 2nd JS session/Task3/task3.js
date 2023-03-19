// 3-given random non-negative number we want to split this number and reverse it at array .
// input: 589647
// output: ["5","8","9","6","4","7"]



function reverseString(string) {
    //cast Number to String. 
    var arrOfStrs = Array.from(String(string));
    var arrOfNums = arrOfStrs.map((str) => Number(str));

    //Reversing.
    reversed=[]
    for (var i = arrOfNums.length-1; i >= 0 ; i--){  
        reversed.push(`${arrOfNums[i]}`)
    }
    return reversed
}

var num = 589647;


console.log(reverseString(num)); 