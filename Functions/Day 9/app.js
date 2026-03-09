function greet(name,cb){
    console.log(`Hello ${name}`);
    cb();
}
function callme(){
    console.log(`I am callback function`);
}
greet("Hamza",callme);


// Scopes in Javascript
//Scope in Javascript refers to the current context of code,
//which determines the accessability of variables to Javascript
//There aer two type of scopes in Jabascript

//Global Scope variables are those declared outside of a block.

// Local Scope variables are those declared inside of a block.


let textMessage='Hi';//this is a global variable because it is outside of the brackets
{
    let textMessage='hi';//this is a local variable
}
console.log(textMessage);


function showMessage(){
    let textMessage='Hello';//this is also a local variable
    console.log(textMessage);
}
showMessage();


for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i);    this will through an error because i is not defined



//Methods in Javascript 
//Methods are functions inside an object 
function greet1(){
    return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
}
const person={
    name:'Hamza',
    age:30,
    greet1,
}
console.log(person.greet1());

const person1={
    name:"Hamza",
    age:19,
    greet:function(){
        return `Hello my name is ${person.name} & I am ${person.age} years old.`;
    }
}

console.log(person1.greet());


// JSON in JS


const person2={
    "name":"Ameer Hamza",
    "age":20,
    "email":"js@gmail.com",
    "isSubscribed":true,
    "hobbies":["Cricket","Programming"],
    "address":{
        "city":"Lahore",
        "idk":true
    }
}

//JSON.stringify()

const jsonString=(JSON.stringify(person2));
const parsedObject=JSON.parse(jsonString);
console.log(parsedObject);




//Dates and Time in JS
// first i will provide for a year , month , day , hours , minutes , seconds, miliseconds 
const currentDate=new Date(2026,2,25,13,34,0,0);
console.log(currentDate);

const date=new Date();
const year=date.getFullYear();
const month =date.getMonth();
const day =date.getDay();
const hours=date.getHours();
const minutes=date.getMinutes();
const milliseconds=date.getMilliseconds();
console.log(`Year ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`MilliSeconds : ${milliseconds}`);

