// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y){
    var result=0
    for(var x=0; x<arr.length; x++){
        if( arr[x]>y){
            result=result+1
        }
    }
    return(result)
}
var result = greaterThanY([5,6,7,8,9,10], 12);
console.log(result);


