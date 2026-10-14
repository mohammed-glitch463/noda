const ps = require("prompt-sync");
const prompt = ps();





let age = Number(prompt("Enter your age : "));
if (age >= 17){
    console.log("he must get ID card");
}
else{
    console.log("he must not get ID card");
}





let price = 100000;
if (price >= 100000){
    console.log("free shipping");
    console.log("the price less than 100000");
}
else {
    console.log("fee shipping");
    console.log("the price more than 100000");
}





let num1 = Number(prompt("Enter the first number : "));
let num2 = Number(prompt("Enter the second number : "));
if(num1 > num2){
    console.log(`the beggest number is ${num1}`);
}
else if (num2 > num1){
    console.log(`the beggest number is ${num2}`)
}
else {
    console.log("all the numbers are both");
}




let age0 = Number(prompt("enter your age : "));
if (age <= 5){
    console.log("Toddler");
}
else if (age <= 12){
    console.log("child");
}
else if (age <= 17){
    console.log("teenager");
}
else if (age <= 59){
    console.log("adult");
}
else{
    console.log("senior");
}





let score = 60;
let attendance = 75; 
if (score >= 60 && attendance >= 75){
    console.log("passes");l
}
else {
    console.log("fails");
}




let color = prompt("enter the traffic light (red, black, green) : ");
if (color == "red"){
    console.log("Stop");
}
else if (color == "green"){
    console.log("Go");
}
else if (color == "yello"){
    console.log("Get ready");
}
else {
    console.log("no color right");
}




let password = prompt("enter the password : ");
if (password.length <= 8){
    console.log("too short");
}
else if (password.length <= 11){
    console.log("modrerate");
}
else if (password.length >= 12){
    console.log("big");
}



let totalPurchase = 100000;
let payment = 100000;
let isMember = true;

let finalAmount = totalPurchase;

if (isMember) {
    finalAmount = totalPurchase * 0.9;
}

if (payment < finalAmount) {
    console.log("Insufficient payment");
} else {
    let change = payment - finalAmount;

    console.log("Final amount: " + finalAmount);
    console.log("Change: " + change);
}
