//DAY 2 - Operators.

//Activity 1 : Arithmetic Operations

const num1 = 20;
const num2 = 5;

//Addition
const sum = num1 + num2;
console.log(sum);
//Sunstraction
const sub = num1 - num2;
console.log(sub);
//Multiply
const mul = num1 * num2;
console.log(mul);
//Divide
const div = num1 / num2;
console.log(div);
//Remainder
const rem = num1 % num2;
console.log(rem);

//Activity 2 : Assignment Operators

//+=
let num3 = 10;
num3 += 1;
console.log(num3);

//-=
let num4 = 12;
num4 -= 1;
console.log(num4);

//Activity 3 : Comparison Operators.

//>
console.log(11>9);
//<
console.log(7<3);
//>=
console.log(7>=7);
//<=
console.log(3<=8);
//==
console.log(3==6);
//===
console.log(3===3);

//Activity 3 : Logical Operators.

//&&
let writtenMarks = 95;
let practicalMarks = 20;

if(writtenMarks >= 95 && practicalMarks >= 18) {
    console.log("A++");
}
else {
    console.log("Get a life bro, you are not even a bro!");
}

//||
let exam1 = true;
let exam2 = false;

if(exam1 == true || exam2 == true) {
    console.log("You can apply for College");
}
else {
    console.log("What you doin?");
}

//!
let age = 19;

if(!(age >= 60)) {
    console.log("comeon young lad!");
}
else {
    console.log("ayyo Walter White!");
}

//ternary operators

const num6 = 654;

let message = (num6 >= 0 ) ? `${num6} is positive` : `${num6} is negative`;
console.log(message);


