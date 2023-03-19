// 2- make a function that sum the all numbers of array except the highest and the lowest
// numbers.



function selectionSort(inputArr) { 
    var n = inputArr.length;
        
    for(var i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        var min = i;
        for(var j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             var tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    
    //Addition
    var total = 0
    for (var i = 1; i<= inputArr.length-2; i++){
        total += inputArr[i]
    }
    return ["Sum is: "+ total,"Sorted Array is: "+ inputArr]
}


var array = [5,2,1,3,4]
console.log(selectionSort(array));

