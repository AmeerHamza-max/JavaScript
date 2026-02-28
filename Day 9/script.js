// null vs undefined 
// null=intentionally want something to be empty 
function func(parameter='default'){
    console.log(parameter);
}

// Auto Boxing
console.log('hello'.length);
console.log('hello'.toUpperCase());//copy of the string with all letters in uppercase.
 
// null.toString();//autoboxing is not done with null it gives us error
// undefined.toString();//autoboxing is also not donw with undefined it gives us an error 


// objects are references 
const objects={
    message:'hello',
}
const object2=objects;//copy by reference 
objects.message="Good Job";
console.log(objects);
console.log(object2);
// We can't compare objects directly.

const object3={
    message:'Good job!',
    price:799,
}
console.log(objects===object3);//false they are not equal to 
console.log(object2===objects);//these two objects are equal because they have the same reference
// const message=object2.message;

const {message,price}=object3;

console.log(message);
console.log(price);
const object5={
    // message:message,
    message,//creates the same as above is given
    // method:function function1(){
    //     console.log('method');
    // }
    method(){
        console.log('method');//it does the same as above shorthand method above
    }
}
console.log(object5);
object5.method();