//Feature Request :

//Arithmetic Operations Script.

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

//Comparison and Logical Operators.

const num3 = 11;
const num4 = 9;
const num5 = 7;

if(num3 > num4 && num3 > num5) {
    console.log(`Num ${num3} is the greatest!`);
}

if(num3 > num4 || num3 < num5) {
    console.log(`Num ${num3} is either largest or second largest`);
}

if(!(num3 < num4)) {
    console.log("is opposite");
}

//Ternary Operator Script.

const num6 = 11;

let message = (num6 >= 0 ) ? `${num6} is positive` : `${num6} is negative`;
console.log(message);
