// 2+2
// 2-2
// 2*3              
// 10/2 

// These are called operations


// 1+1*3 it multiplies first 1 with 3 and then add 1
// * / are done first and + - are done after
// * / have same priority and calculated from left to right
// + - have same priority it also calcualtes from left to right


// brackets have highest priority so it evaluates first
// (1+2)*3 =9 

// 1% = 1 / 100;
// 10% = 10 / 100


// Order of Operations 
// 1. (...) 
// 2. * /
// 3. + -


console.log(20.95+7.99*2*0.1);
console.log((20.95 + 7.99 * 2)*0.1);


// 2 , 3 , 4 are called integers
// 2.2 , 3.5 are called floating point numbers(floats)


console.log(0.1+0.2);
console.log(20.95 + 7.99);//these results makes some in accuracies to avoid this problem best practice when calculating money

// (2095+799)/100 in this way we can remove the in accuracies with float

// How to round a number by moving up and down a floating point number
// if less then 5 it does not increase the number if greater then or equal to 5 it round up

console.log(Math.round(4.5));//5
console.log(Math.round(4.3));//4

console.log((Math.round((2095+799)*0.1))/100);//2.894

// Lesson 2 Exercises - Numbers and Math

    console.log(10+3*8+5);
    console.log((2*10)/3);

// Strings in JS

console.log('Hello');
// alert("Hello");

console.log("Some"+"text");

console.log("Some"+"More"+"Text");


console.log(typeof 2);

console.log(typeof "Hello");

console.log("Hello"+3);//This feature is called feature coersion or automatic conversion

console.log('$29.84');
console.log('$'+28.85+99.99);//this not gives correct values


console.log('$'+20.95+7.99);





