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


function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400,1000));

const user = {
    username: "Priya",
    price: "199"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ia ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Rashi",
    price: "200"
})

const myNewArray = [200, 300, 400, 500]

function retuenSecondValue(getArray){
    return getArray[1]
}

// console.log(retuenSecondValue(myNewArray));
console.log(retuenSecondValue([200, 300, 400, 500]));
