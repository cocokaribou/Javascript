// 1. Use strict
// added in ES5
// use this for Vanilla Javascript

'use strict';

// 2. Variable rw(read/write)
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

// block scope {}
console.log(name); //doesn't output anything
console.log(globalName); //output: global name


// var :declaring variables before ES6, don't ever use this!
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age); //output: undefined
age = 4;
console.log(age); //output: 4
var age;

// when use let
//name = 4; //uncaught reference error
//let name;

{
    num = 4;
    var num;

}
console.log(num); //output:4



// 3. Constant r(read only)
// favor immutable data type always for a few reasons:
//  - security 
//  - thread safety
//  - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single itme: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function


//dynamic typing
const count = 18;
const size = 18.1;

console.log(`value: ${count} type: ${typeof count}`);
console.log(`value: ${size} type: ${typeof size}`);

// bigInt (fairly new, don't use it yet)
// chrome, firefox
const bigInt = 12313123132131312313131313113131333313131313n;
console.log(`value: ${bigInt} type: ${typeof bigInt}`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+ brendan;
console.log(`value: ${greeting} type: ${typeof greeting}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`)

// null
// type: object
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifier for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2); //false
// a symbol value may be used as an identifier for object properties

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5; 
console.log(`value: ${text}, type: ${typeof text}`);// 75, string
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`); // 4, number

console.log(text.charAt(0)); //type error
//runtime error

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; 
ellie.age = 21;

// Immutable data types: primitive types, frozen objects
// Mutable data types: all objects by default are mutable in JS

