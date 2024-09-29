// singleton
// Object create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Priya",
    "full name": "Priya Gupta",
    [mySym]: "myKey1",
    age: 23,
    location: "Hamirpur",
    email: "Priya12@chatgpt.com",
    IsLoggedIn: false,
    lastloginDate: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Priya11@google.com"
// Object.freeze(JsUser)
JsUser.email = "Priya11@gupta.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







