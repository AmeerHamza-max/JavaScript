function greet(){
    console.log("Hello");
}
greet();
greet();
greet();
greet();

function greet1(name){
    console.log(`Hello ${name}`);
}

greet1("Ameer Hamza");

greet1("Junaid Iqbal");

greet1("Adeel Iqbal");

greet1();//it will display Hello Undefined

function greet2(name){
    if(name===undefined){
        console.log("Hi there!");
    }
    else{
        console.log(`Hello ${name}`);
    }
}
greet2();


function convertToFahrenheit(celcius){
    let fahrenheit=(celcius*9/5)+32;
    console.log(fahrenheit);
}

convertToFahrenheit(25);

function convertToCelsius(fahrenheit){
    let celcius=(fahrenheit-32)*5/9;
    console.log(celcius);
}

convertToCelsius(77);


function convertTemperature(degrees,unit){
    if(unit==='C'){
      let  fahrenheit=(degrees*9/5)+32;
        console.log(`'${fahrenheit}F'`);
    }
    else if(unit==='F'){
      let celcius=(degrees-32)*5/9;
      console.log(`'${celcius}C'`);
    }
}

convertTemperature(25,'C');
convertTemperature(86,'F');


function convertLength(length,to,from){
    if(to==='miles' && from==='km'){
        let km=Math.floor(length*1.609);
        console.log(`'${km}km'`);
    }
    else if(to==='km' && from==='miles'){
        let miles=length/1.6;
        console.log(`'${miles}'miles`);

    }
    else if(to==='miles' && from==='ft'){
        let feet=length*5280;
        console.log(`'${feet} ft'`);
    }
    else if(to==='km' && from==='ft'){
        let feet=length*3281;
        console.log(`'${feet} ft'`);
    }
    else if(to==='ft' && from==='km'){
        let km=length/3281;
        console.log(`'${km} km'`);
    }
    else if(to==='ft' && from==='km'){
        let miles=length/3281;
        console.log(`'${miles} miles'`);
    }
    
    

}
convertLength(50,'miles','km');
convertLength(32,'km','miles');
convertLength(5,'miles','ft');
