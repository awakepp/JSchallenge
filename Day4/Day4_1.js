//DAY 4 - Loops.

//Activity 1 : For Loop

//Task - 1
let n = 10

for(i=1; i<=n; i++) {
    console.log(i);
}

//Task - 2 
let num = 5;

for(i=1; i<=n; i++) {
    console.log(i*num);
}

//Activity 2 : While Loop

//Task - 3
let number = 10;
let sum = 0;
let i = 0;

while(i <= number) {
    sum += i;
    i++
}
console.log(sum);

//Task - 4
let number2 = 10;
let k = number2;

while (k >= 1) {
    console.log(k);
    k--
}

//Activity 3 : Do-While Loop

//Task - 5
let number3 = 5;
let j = 1;

do {
    console.log(j);
    j++
} while(j <= number3) 

//Task - 6
let number4 = 5;
let l = 1;
let fact = 1;

do {
    fact *= l;
    l++;
} while(l <= number4)

console.log(fact);

//Activity 4 : Nested Loops

//Task - 7
let number5 = 5;

for(let p=0; p<number5; p++) {
    let line = "";
    for(let q=0; q<=p; q++) {
        line += "*";
    }
    console.log(line);
}

//Activity 5 : Loop Control Statements.

//Task - 8
let number6 = 10

for(let i=1; i<=number6; i++) {
    if(i==5) {
        continue;
    }
    else {
        console.log(i);
    }
}

//Task - 9
for(let i=1; i<=number6; i++) {
    if(i==7) {
        break;
    }
    else {
        console.log(i);
    }
}
