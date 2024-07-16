//Feature Request :

//Number Printing Script.

let n = 10

//For Loop

for(i=1; i<=n; i++) {
    console.log(i);
}

//While Loop

let j = 1;
while(j <= n) {
    console.log(j);
    j++
}


//Multiplication Table Script.

let num = 5;

for(i=1; i<=n; i++) {
    console.log(i*num);
}


//Pattern Printing Script.
let number5 = 5;

for(let p=0; p<number5; p++) {
    for(let q=0; q<=p; q++) {
        process.stdout.write("*");
    }
    console.log();
}


//Sum Calculation Script.

//While Loop
let number = 10;
let sum = 0;
let i = 0;

while(i <= number) {
    sum += i;
    i++
}
console.log(sum);


//Factorial Calculation Script

//Do-While Loop
let number4 = 5;
let l = 1;
let fact = 1;

do {
    fact *= l;
    l++;
} while(l <= number4)

console.log(fact);
