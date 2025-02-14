//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());//2/14/2025
// console.log(myDate.toLocaleTimeString());//5:03:52 AM
// console.log(myDate.toLocaleString());//2/14/2025, 5:03:52
// console.log(typeof myDate);

//let myCreateDate = new Date(2023,0,23);//Mon Jan 23 2023

let myCreatedDate = new Date("02-14-2025")
//  console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:" long"
    
})