//Feature Request :

//Number Check Script.
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

//Voting Eligibility Script
let age = 19;

if(age >= 18) {
    console.log("You are eligible for Voting");
}
else if(age < 18) {
    console.log("You are NOT eligible for Voting");
}

//Day of the Week Script.
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

//Grade Assignment Script.
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

//Leap Year Check Script.
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
