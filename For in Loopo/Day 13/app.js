// When we call the forEach helper we pass in anonymous callback
// function.
// This function gets called one time for every element in 
// the array whatever is inside the function that logic happens

const colors=['teal','blue','red','green'];
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }


colors.forEach(function(color){
    console.log(color)
})

const words=["hello","bird","table","football","pipe"];
const capwords=words.forEach((word,index,arr)=>{
    console.log(word);
    console.log(index);
    console.log(arr);
    arr[index]=word[0].toUpperCase()+word.substring(1);

})
console.log(capwords);



const numbers=[1,2,3,4,5];
let sum=0;
function adder(number,sum){
    number.forEach((num)=>{
        sum=sum+num;

    })
    return sum;
}

console.log(adder(numbers,sum));



/// Map Method 
// The map() method creates a new array populated with the 
// results of calling a provided function on every element
// in the calling array.

let numbers1=[1,2,3,4,5];
let double=numbers1.map(num=>num*2);
console.log(double);

// Difference between map and for each 
// Map method will not modify the exisiting array but it gives a new array
// for each method modify the real array and gives the number



let peoples=[
    {firstName:"Ameer",lastName:"Hamza"},
    {firstName:"Adeel",lastName:"Iqbal"},
    {firstName:"Jayne",lastName:"Cobb"},
]
const results=peoples.map(person=>{
    return [person.firstName,person.lastName];
})

console.log(results);

let random=[Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*20),Math.floor(Math.random()*30),Math.floor(Math.random()*40),Math.floor(Math.random()*50),Math.floor(Math.random()*100)];
console.log("This is a random number = ",random);

let newArr=random.map((ran)=>{
    console.log(ran);
    return ran*10;
})
console.log(newArr);


// 6:39 



