//DAY 3 - Control Structures.

//Activity 1 : If-Else Statements

//Task - 1
const num1 = 11;

if(num1 > 0) {
    console.log(`${num1} is Positive`);
}
else if(num1 == 0) {
    console.log(`${num1} is Zero`);
}
else if(num1 < 0) {
    console.log(`${num1} is Negative`);
}

//Task - 2
let age = 19;

if(age >= 18) {
    console.log("You are eligible for Voting");
}
else if(age < 18) {
    console.log("You are NOT eligible for Voting");
}

//Activity 2 : Nested If-Else Statements.

//Task - 3
let num2 = 56;
let num3 = 95;
let num4 = 23;

if(num2 > num3) {
    if(num2 > num4) {
        console.log(`${num2} is the Greatest`);
    }
    else {
        console.log(`${num4} is the Greatest`);
    }
}
else if(num2 < num3){
    if(num3 > num4) {
        console.log(`${num3} is the Greatest`);
    }
    else {
        console.log(`${num4} is the Greatest`);
    }
}

//Activity 3 : Switch Cases.

//Task - 4
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter Valid Number");
        break;
}

//Task - 5
let score = 96;

switch (true) {
    case score >= 95:
        console.log("A++");
        break;
    case score >= 80:
        console.log("A");
        break;
    case score >= 70:
        console.log("B");
        break;
    case score >= 60:
        console.log("C");
        break;
    case score >= 50:
        console.log("D");
        break;
    case score >= 40:
        console.log("D");
        break;
    default:
        console.log("Enter Valid Score");
        break;
}

//Activity 4 : Conditional (Ternary) Operator.

//Task - 6
let number = 11;

(number%2==0) ? console.log("EVEN") : console.log("ODD");

//Activity 5 : Combining Conditions.

//Task - 7
let year = 2024;

if(year%4==0) {
    if(year%100==0 && year%400==0) {
        console.log(`${year} is a LEAP year.`);
    }
    else if(!year%100==0) {
        console.log(`${year} is a LEAP year.`);
    }
    else {
        console.log(`${year} is NOT a LEAP year.`);
    }
}
else {
    console.log(`${year} is NOT a LEAP year.`);
}