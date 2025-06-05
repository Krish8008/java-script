// let krushna = "Krushna"
// let age = 20
// let bool = true
// let val = null;  // datad type of the nul is the object
// let val3;

// console.table({krushna, age, bool, val, val3})

// console.log(typeof krushna);
// console.log(typeof age);
// console.log(typeof bool);
// console.log(typeof null); // => object
// console.log(typeof undefined); // => undefined
// console.log(typeof val3); => undefined

// let num = "33";
// let num2 = Number(num)

// console.log(typeof num)
// console.log(typeof (num))

// type conversion string to num :
// "33" => 33
// "33abc" => Nan (Not a Number)
// true => 1; false => 0
// null => 0
// nudifined => Nan

// conversion to boolean
// 1 => tuue; 0 => false
// "" => false
// "krushna" => true

// console.log(typeof num2)

// **************************** Operations *****************************

// "1" + 2 => 12
// 1 + "2" => 12
// "1" + 2 + 2 = 122
// 1 + 2 + "2" = 32

// ********************** Deta types ********************************
// primitive 
// String, Number => 12.12, Boolean, null, undifined, Symbol, bigint

// Non primitive
// arrays, functions, objects


// use and decleration of symbol
// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId); // output => false

// const BigInt = 2163132525254623142n
// console.log(typeof BigInt) // => bigint

// objects
let muObj = {
    name : "Krushna",
    age : 20,
    friends : ["kri", "abc", "xyz"]
}

// functions 
const myFun = function(){

    console.log("Hellow Woeld");
}
// deta type of function => function

// *************************************** Memory ***************************************

// stack => primitive, Heap => Non-primitive
// Heap 
// let obj1 = {
//     email : "krushna808@gmail.com",
//     num : 838008
// }

// let obj2 = obj1;

// obj2.email = "krushna106@gmail.com" 
// console.log(obj1.email) // => krushna106@gmail.com
// console.log(obj2.email) // => krushna106@gmail.com

// stack 
// let num1 = 5
// let num2 = num1
// num2 = 10 
// console.log(num1) // => 5
// console.log(num2) // => 10

//********************************* String ***********************************

// const name = "Krushna"
// const age = 20
// console.log(name + age)

// // string interpolation Batter way to concat strings

// console.log(`Hello my name is ${name} and my age is ${age}`)

// // some methods
// // replace the values
// let url = "krushnashewale@gmail.com"
// console.log(url.replace("gmail","google" )) // => replace gmail by google in the url

// // searching in the string
// console.log(url.includes("krushna")) // => true (int the url krushna is present)

// // convert string to array based on "_" and " " empty space
// let str = "krushna arjun shewale" 
// console.log(str.split(' ')) // => ['krushna', 'arjun', 'shewale']

// *********************************** Numbers and maths *******************************************

// const num = 100

// const newNumber = new Number(300)
// console.log(newNumber)

// // convert number to string      (if we convert number to string then we able to use string properties there)
// console.log(newNumber.toString()) 

// // how many decimal numbers you have back of the number
// console.log(newNumber.toFixed(2)) // => 300.00


// const number = 12.82
// console.log(number.toPrecision(2)) // => 13 (return type of pricision is the string)
// console.log(number.toPrecision(3)) // => 12.8

// const number2 = 112.82
// console.log(number2.toPrecision(3)) // => 113

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // => 1,000,000
// console.log(hundreds.toLocaleString('en-IN')) // => 10,00,000

//                                    *********** maths *************

// console.log(Math)
// console.log(Math.abs(-3)) // => 3
// console.log(Math.abs(3))  // = 3  abs means absolute values 
// console.log(Math.round(5.6)) // => 6
// console.log(Math.round(5.5)) // => 5
// console.log(Math.ceil(5.6)) // => 6
// console.log(Math.floor(5.6)) // => 5
// console.log(Math.min(1,2,3,4,5,6)) // => 1
// console.log(Math.max(1,2,3,4,5,6)) // => 6

// console.log(Math.random()) // => ramdom values between 0 & 1
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10) + 1); // => it gives values between 1 to 10

// const min = 1
// const max = 6

// console.log(Math.floor(Math.random() * (max - min + 1)) +min) // => it gives output between minimum and maximum

// ********************************************* Dates *************************************************************************

// let date = new Date()
// console.log(date.toString())             // => Mon Jun 02 2025 17:26:10 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString())        // => Mon Jun 02 2025
// console.log(date.toJSON())              // => 2025-06-02T17:27:17.709Z
// console.log(date.toLocaleString())      // => 6/2/2025, 5:28:03 PM
// console.log(date.toLocaleTimeString()) // => 5:29:32 PM
// console.log(date.toTimeString())       // => 17:30:33 GMT+0000 (Coordinated Universal Time)
// console.log(date.toUTCString())       // => Mon, 02 Jun 2025 17:31:11 GMT

// console.log(typeof date)  // => object

// let declereDate = new Date(2006, 3, 25) // => assign argument in Date function => Date(year, month-1, date)
// console.log(declereDate.toDateString())

// let currentTime = Date.now()
// console.log(Math.floor(Date.now() / 1000))  // => it is converted into mili seconds

// let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getDay() + 1)
// console.log(newDate.getMonth() + 1)

// console.log(newDate.toLocaleDateString('defaulu', {
//     weekday: "long",
// }))

// ***************************** Arrays ********************************

// const arr = [1,2,3,4, "krushna",true, "mayuresh"] // => arrays in js are resizable and different deta type
// console.log(arr[4])

// arr.push(1,2,3)
// console.log(arr)     // => [ 1, 2, 3, 4, 'krushna', true, 'mayuresh', 1, 2, 3 ]
// arr.pop()           // => deleting last elemrnt in the array
// arr.shift()          // // => deleting first element in the array
// console.log(arr.includes(4))    // => true
// console.log(arr.indexOf(4))     // => 2 (indez 1 is deleted)

// let arr1 = [1,2,3,4,5]

// let arr2 = arr1.join()
// console.log(arr1)
// console.log(arr2) // => type will be change to string

// slice or splice

// copy of an array
 const fruits = ["Strawberry", "Mango"];

// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]

const arr = [1,2,3,4]
// console.log(typeof(arr))

// *************************** objects ******************
// 2 types of declear objects are constructor and literal
// singaleton => it is made by constructor

// object literals

const mySym = Symbol("myKey")
const jsUser = {
    name : "krushna", 
    age : 19,
    location : "Nashik",
    [mySym]: "key2"  // it is a symbol => [Symbol(myKey)]: 'key2'
}

jsUser.name = "shewale" // =>  change in name 
// Object.freeze(jsUser) // => when we freez object we cannot change in jsUser they are freezed
// console.log(jsUser["name"])
// console.log(jsUser);

jsUser.work = function(){

    console.log("Hey"); 
    console.log(`Hellow world ${this.name}`); // => ascessing values in the object, <this> means <jsUser>
}
// console.log(jsUser.work())

// single line declertion of object

const user = new Object()
const user2 = {}

// nested objects
 const realUser = {
    email : "xyz@gmail.com",
    userFullNume : {
        userName : {
            name : "Krushna",
            surname : "Shewale"
        }
    }
 }

//console.log(realUser)  =>
/*  
{
  email: 'xyz@gmail.com',
  userFullNume: { userName: { name: 'Krushna', surname: 'Shewale' } }
}
*/

//console.log(realUser.userFullNume.userName.surname); // => Shewale

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);  // =>                          { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
 const obj5 = {...obj1, ...obj2, ...obj3}
 console.log(obj5) // =>                           { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
