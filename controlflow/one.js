// if 
// const isUserloggedIn = true
// const temprature = 41

// if ( 2 == "2" ){
//     console.log("executed");
// }

// if ( 2 != 3 ){
//     console.log("executed");
// }

// if ( temprature === 41 ){
//     console.log("temprature is less than 50");
// }else {
// console.log("temprature is greater than 50");
// }
// console.log("executed");

// // <, >, <=, >=, ==, !=, === 

// const score = 200
 
// if (score > 100) {
//     let power = "fly"
//     console.log(`const power: ${power}`); 
// }
// console.log(`const power: ${power}`);

// const blance = 1000

// if (blance > 500) console.log("test"),
// console.log("test2");

// if (blance < 500) {
//     console.log("less than 500"); 

// } else if (blance < 700) {
//     console.log("less than 700");

// } else if (blance < 900) {
//     console.log("less than 900");  

// }else {
//     console.log("less than 1200");  
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true
 
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}