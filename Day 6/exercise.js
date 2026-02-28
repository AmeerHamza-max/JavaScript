let hour=25 ;
let name='Ameer Hamza'
if(hour>=6 && hour<=12){
    console.log(`Good Morning ${name}`);
}
else if(hour>=13 && hour<=17){
    console.log(`Good Afternoon ${name}`);
}
else{
    console.log(`Good Night ${name}`);
}



let age=66;
let isHolidays=false;
if((age<=6 || age>=65) && isHolidays){
    console.log('Discount');
}
else{
    console.log('No Discount.')
}

let randomNumber=Math.random();
let result=randomNumber<0.5;
let guess=result?'heads':'tails';
console.log(guess);