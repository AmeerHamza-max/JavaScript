 //DOM is built in object 
        // document.body.innerHTML='hello';
        // document.title='Good job!';
        //first property document.title
console.log(document.title);
document.title='changes';
console.log(document.title);

// now we read document.body 

console.log(document.body);

console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML='<button>Good Job!</button>';

// method is a function saved inside an object


// document.querySelector();
// let us get any element from the page and put it inside javascript
console.log(document.querySelector('button'));
console.log(document.querySelector('body'));

// every HTML has a property called .innerHTML

console.log(document.querySelector('body').innerHTML);

document.querySelector('button').innerHTML='Changed';
//document.querSelector will select the first button on the page
