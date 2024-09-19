// Primitive Datatype

// 7 type: String, Number, Boolean, null, Undefined, Symbol, BigInt

const socre = 100
console.log(typeof socre);

const socreValue = 100.3
console.log(typeof socreValue);

const IsloggedIn = false
console.log(typeof IsloggedIn);

const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail;
console.log(typeof userEmail); 

const Id = Symbol("123")
console.log(typeof Id);

const anotherId = Symbol("123")
console.log(typeof anotherId);

console.log(Id === anotherId);

BigInt = 123456782345678912345678923456789234567n
console.log(typeof BigInt);

// Reference (Non Primitive)

// Array, Objects, Functions

const hero = ["Sktimaan", "Naagraj","Doga"]
let MyObj= {
    Name: "Priya",
    age: 23,
}

const MyFunctions = function(){
    console.log("Hello World");
    
}

console.log(typeof MyFunctions);

