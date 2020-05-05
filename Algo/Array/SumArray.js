// Given var arr = [6,3,5,1,2,4], print each value and the sum so far
// Predicted output: Num 6, Sum 6, Num 3, Sum 9, Num 5, Sum 14, Num 1, Sum 15, Num 2, Sum 17, Num 4, Sum 21
// When you have solved this, create new values for your array and ensure it still works as expected.

// YOUR CODE HERE
var arr = [7,4,5,1,2,4,8]
var sum=0;
for(var num=0; num<arr.length; num++){
    sum=sum+arr[num];
    console.log("num: ", arr[num], "sum: ", sum)
}