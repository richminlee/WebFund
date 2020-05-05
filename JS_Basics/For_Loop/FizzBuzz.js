for(var j = 1; j <= 30; j++){
    if(j%3 == 0 && j%5 == 0){
        console.log("FizzBuzz")
    }
    else if(j % 3 == 0){
        console.log("fizz")
    }
    else if(j % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(j)
    }
}