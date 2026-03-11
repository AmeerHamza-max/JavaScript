// Enhanced object Literals, introduced in ECMAscript 6 (ES6) are a
//set of enhancements to the syntax for defining objects in
// Javascript. These enhancements make it more convenient and concise
//to define object properties and methods


function user(name,age,work){
    return {
        name:name,
        age:age,
        work,
    };

}
const Hamza =user("Hamza",22,'Programmer');
console.log(Hamza);
//4:50