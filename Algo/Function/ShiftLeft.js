// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    var y=[]
        for(var x=1; x<arr.length; x++){
                y.push(arr[x])
            }
            if(x=arr.length)
            y.push(0);
            return y
}
var resultArr = shiftLeft([]);
console.log(resultArr);