// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2){ body ... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('whadup');

// typescript
// function log(message : string) : number {
//     console.log(message);
//     return 0;
// }


// 2. Parameters
// primitive parameters: passed by value
// object parameter : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const account = {name: 'joy'};
changeName(account);
console.log(account);


// 3. Default Parameters (added in ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //Hi! by undefined

function showMessage2(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!'); //Hi! by unknown


// 4. Rest parameters (added in ES6)
// array 
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('doe','a','dear');


// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);

    function printAnother(){
        let childMessage = "alert!";
        alert(childMessage);
    }
    //console.log(childMessage); //childMessage is not defined
    printAnother();
}
printMessage();


// 6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// function without return
// return undefined;


// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long logic
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long logic
}