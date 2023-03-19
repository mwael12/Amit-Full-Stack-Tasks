// 6- Write a function to find the count of a letter in a string.
// input:letterCount("Connect",'c') // output :2


function repeatedLetter(string) {
    var array = []
    var count = 0
    for (var i = 0; i <string.length; i++) {
        for (var j= i+1; j< string.length-1; j++) {
            if (string[i] == string[j]){
                array.push(string[j])
                count+=1
            }
        }
    } 
    return ["Repeated Letters Are: "+ array + " Output is: "+ count]
}

var text = "connect"

console.log(repeatedLetter(text));