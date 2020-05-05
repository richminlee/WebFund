var name = "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;

if(isRaining==true){
    console.log("I need a coat");
    cash-=50;
    isRaining=false;
}
if(name!="Bob"){
    console.log("Hello stranger");
}
else{
    console.log("Hello Bob");
}
if(job=="Web Developer"){
    console.log("Keep up the good work");
    cash+=500;
    job=("Senior Web Developer");
}
if(hasPet==false){
    hasPet=true;
    cash-=1500;
}
if(cash>1000){
    console.log("Vacation time!");
    cash-=1200;
}
console.log("Payday!");
cash+=2000;
console.log(name, isRaining, hasPet, job, cash);