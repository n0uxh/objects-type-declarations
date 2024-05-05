
// let person = "nouxh"
// let persons = {
//     name: "sherina",
//     age:9,
//     address:{
//         street:1,
//         city:"Islamabad",
//         house:82,
//         country:"Pakistan"
//     }
// }
// console.log(person.age)
// console.log(person.address.country)

//Typer declarations 

// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }

// console.log(teacher.name);
// console.log(teacher["experience"]);


//========================================================================================

// Type Declaration
// let student : {
//     name: string,
//     age: number
//     "roll no": number
// }

// student = {
//     name: "Hira",
//     age: 30,
//     "roll no":552
// }
// student['age']= 22
// student.age = 26
// student["roll no"] = 5522


// console.log(student['name'])
// console.log(student['age'])
// console.log(student['roll no'])


//========================================================================================

// // Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);


// //========================================================================================

// // Interfaces = structure maker 
// // allows us to define the structure or shape of an object 
// // specify the properties and methods that an object has or should have

// interface Manager {
//     name: string,
//     subordiates?: number
// }

// let storeManager: Manager = {
//     name: "Bilal"
// }

// //========================================================================================

// //Structural typing 

// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number;
// }

// let ball1 : Ball ={
//     diameter : 15
// }

// let sphere1 : Sphere ={
//     diameter : 20
// }

// interface tube{
//     length:number
//     diameter : number
// }

// let tube1:tube ={
//     diameter : 55,
//     length: 45,
// }


// ball1 = sphere1
// sphere1 = ball1

//tube1 = ball1 // not equal by structure (properties) = diameter, length
// ball1 = tube1 // diameter = both equal

//============================================================================================================


//Nominal Type systems = where you could create two types but could not assign them to each other.
//Structural Type system = means that when comparing types

//============================================================================================================

//DUCK TYPING


// type MyType = {
// 	name: string; 
// 	id:number; 
// 	age?:number |undefined;
// }

// let myType:MyType = {name: "Zia" , id: 2};         //ducktyping

// myType.age = 34


// interface MyType2 {
// 	name:string;
// 	age:number;
// }

// let myType2:MyType2={
// 	name:"Ali",
// 	age: 26
// }

// console.log(myType.name)
// console.log(myType.age)

// console.log(myType2.name)
// console.log(myType2.age)

//============================================================================================================


let myType = { name: "Zia", id: 1 , age: 25};

myType = { id: 2,  name: "Tom" , age: 55};

// var x: { id : number, [x:string]: any};   //[x:string]: any} >> dynamic part

// x ={ id:1, name : "kapoor"};

// x ={ id:2, name_person:"riaz"}

// x= { id:10 , age: 27}

//=============================================================================================================

//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "sheela" };

let myType3 = { id: 3,  name: "noor" };

var myType4 = { id: 4, name :"adil", age: 22};
myType = { id: 5, name :"nighat", age: 20};   //fresh obj = new values to myType


//fresh obj = recently created
//stale obj = old obj

myType4 = myType;
myType = myType4;     //stale obj = myType4

console.log(myType)
console.log(myType2)
console.log(myType3)
console.log(myType4)
