// singleton
// Object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shantanu",
    "full name": "Kumar Shantanu",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "kumar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log( JsUser[mySym])

JsUser.email = "Kumar@123.com"
// Object.freeze(JsUser)
JsUser.email = "Kumar@303.com";
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());