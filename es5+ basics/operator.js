// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

console.log("julie's book\ntim's book");
console.log("julie's book\ntim's book");

// 2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2); //remainder
console.log(2**3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement = ${preIncrement}, counter = ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement = ${postIncrement}, counter = ${counter}`);


// 4. Assignment operators
// 5. Comparison operators

// 6. Logical operators || (or), && (and), ! (not)
const value1 = true;
const value2 = 4<2;


// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); //if value1 is true, check() won't be called

function check(){
    for(let i = 0; i<11; i++){
        //wasting time
        console.log('💕');
    }
    return true;
}

// pro tip:
// console.log(`${value1 || value2 || heavyComputation()}`) o
// console.log(`${heavyComputation() || value1 || value2}`) x


// && (and), finds the first falsey value
// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullabeObject.something;
// }


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //T
console.log(stringFive != numberFive); //F

// === strict equality, no type conversion, recommended one
console.log(stringFive === numberFive); //F
console.log(stringFive !== numberFive); //T


//object equality by reference
const cat1 = {name:'mr.whiskers'};
const cat2 = {name:'mr.whiskers'};
const cat3 = cat1;

console.log(cat1 == cat2); //F
console.log(cat1 === cat2); //F (thought this was T) only compares references 
console.log(cat1 === cat3); //T?


//equality - puzzler
console.log(0 == false); //T
console.log(0 === false); //F
console.log('' == false); //T
console.log('' === false); //F
console.log(null == undefined); //T (thought this was F)
console.log(null === undefined); //F


// 8. Conditional operators: if
// if, else if, else

const name = 'ray';
if(name === 'doe'){
    console.log('a deer');
}else if(name === 'ray'){
    console.log('a drop of sun');
}else{
    console.log('who you');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'doe' ? 'yes' : 'no'); //no

//ESLint
//nesting ternary expressions can make code more difficult to understand.


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const age = 40;
switch(age){
    case age>10:
        console.log('you are a teenager');
        break;
    case age>20:
        console.log('you are in your 20s');
        break;
    default:
        console.log('you\'be long dead in dog years');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 4;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}


// do-while loop, body code is executed first,
// then check the condition.
//i = 0;
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);


// for loop, for(begin; condition; step)
for(i = 3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i=i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops - not recommended


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)

for(let i = 0; i<=10; i++){
    if(i%2===1){
        continue;   
    }
    else console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let i = 0; i<=10; i++){
    if(i==8){
        break;
    }
    console.log(i);
}
