// ***********************Date*************************

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

 let myCreatedDate = new Date(2024, 8, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 8, 23, 5, 7)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-09-23")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("9-23-2024")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log( myCreatedDate.getDate());
// console.log( myCreatedDate.getDay());
// console.log( myCreatedDate.getHours());
// console.log( myCreatedDate.getMonth());
// console.log( myCreatedDate.getSeconds());
// console.log( myCreatedDate.getMinutes());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekday: "long",
})
