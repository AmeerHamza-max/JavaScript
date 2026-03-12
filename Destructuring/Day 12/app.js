const colors=["red","green","blue","yellow","orange"];
const [color1,color2,color3]=colors;
console.log(color1);
console.log(color2);
console.log(color3);



// In object destructuring the order does not matter but the name does matter

const student={name:"Hamza",position:"First",rollNo:55 };
// const {name,position,rollNo}=student;
// console.log(name);
// const {color1}=student;syntax error
// console.log(position);
// console.log(rollNo);



const person={
    name:"Ameer Hamza",
    age:30,
    gender:"male",
    country:"USA",
}
const {name,age,country}=person;
console.log(name);
console.log(age);
console.log(country);

//renaming the destructuring
const num={x:100,y:200}
const {x:new1,y:new2}=num;
// console.log(x);//this will through an error
// console.log(y);//this will also through an error now 
console.log(new1);
console.log(new2);

let {a,b,...rest}={a:100,b:200,c:300,d:400,e:500};
// console.log(a);
// console.log(b);
console.log(rest);


const person1={
    name:"Hamza",
    age:30,
    gender:"male",
    country:"Pakistan"
};
const {name:personName,age:personAge,country:personCountry}=person1;
console.log(personName);
console.log(personAge);
console.log(personCountry);


const person2={
    name:"Jhon Doe",
    age:20,
    country:"Pakistan"
}

// function printPersonInfo(person){
// console.log(`Name: ${person.name}`);
// console.log(`Age: ${person.age}`);
// console.log(`Country: ${person.country}`)
// }

function printPersonInfo({name,age,country}){
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Country: ${country}`)
}

printPersonInfo(person2);



 let options={
    title:"My menu",
    items:['Burger','Pizza']
 }
 function showMenu({title,width:w=100,height:h=200,items:[item1,item2]}){
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
 }

 showMenu(options)
 //6:02