
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName//this is only reference
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log((loginUserMessage("Shantanu")));
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){//Here ... is a rest operator
    return num1
}

// console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200,400,500,200));


const user = {
    username: "hitesh",
    prices: 199

}
    function handleObject(anyObject){
        console.log(`Username is ${anyObject.username} and price is ${anyObject.pric}`);
        
    }
    // handleObject(user)
    handleObject({
        username: "sam",
        price: 399
    })

    const myNewArray = [200,400,100,600]

    function returnSecondValue(getArray){
        return getArray[1]
    }

    // console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([200,400,100,600]));
