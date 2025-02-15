//const tinderUser = new Object()
const tinderUser= {}

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "kumar",
            lastnam: "Shantanu"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        eamil: "h@1gmail.com"
    },
    {
        id: 2,
        eamil: "h@2gmail.com"
    },
    {
        id: 3,
        eamil: "h@3gmail.com"
    },
]

users[1].eamil;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Destructuring of Objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kumar"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
const {courseInstructor}= course

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {}
]
