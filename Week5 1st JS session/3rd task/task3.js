// 3. Write a JS code to print Even numbers in given array

//Easy Mode: 
// var array = [1,2,3,4,5,6,8,10]
// for (var i =0; i < array.length ; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i])
//     }
// }



var given_array = []
var even_number_array =[]
var array_length = parseInt (prompt("Enter your array length: "))


for ( var i = 0; i < array_length ; i++) {
    var array_element = prompt (`Enter your ${i} element : `) //didn't want to print the if directly parsed. 
    var array_element_number = parseInt(array_element)
    
    if (array_element % 2 == 0) {
        even_number_array.push(array_element)
    } 
    given_array.push(array_element_number)
    
    }
    
document.write(`<h2> Your array is: ${given_array}</h2>`)
document.write(`<h2> Even numbers in the array are: ${even_number_array}</h2>`)




