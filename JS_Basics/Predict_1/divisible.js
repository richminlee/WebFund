var num2 = 10;
if(num2 % 2 == 0){
    console.log("Divisible by 2");
    num2 = num2 * 3;
}
if(num2 % 3 == 0){
    console.log("Divisible by 3");
    num2 = num2 / 2;   
}
else if(num2 % 5 == 0){
    console.log("Divisible by 5");
    num2 = num2 * 7;
}
if(num2 % 7 == 0){
    console.log("Divisible by 7");
    num2 = num2 - 10;
}
else{
    console.log("Almost there!")
    num2 = num2 / 2;
}
console.log(num2);
