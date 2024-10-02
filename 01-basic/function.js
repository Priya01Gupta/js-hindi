function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("G");
    console.log("U");
    console.log("P");
    console.log("T");
    console.log("A");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); //Parameter
    
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    // console.log("Priya");
    // return result
    return number1 + number2
    
}


// addTwoNumbers(3, 6) //argument

const result = addTwoNumbers(3, 6) 
console.log("result:", result);

function loginUserMessage(username = "Priya"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Priya"));
console.log(loginUserMessage("Rashi"));


