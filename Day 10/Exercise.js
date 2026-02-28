let basketball={
    "price":2095,
}
console.log(basketball);

basketball.price+=500;
console.log(basketball);
basketball['delivery-time']='3 days';
console.log(basketball);
function comparePrice(product1,product2){
    if(product1.price>product2.price){
        return product1;
    }
    else if(product1.price<product2.price){
        return product2;
    }
}
let product1={
    name:"cheese",
    price:120,
}
let product2={
    name:'cheese',
    price:120
}
console.log(comparePrice(product1,product2));

function isSameProduct(product1,product2){
    if(product1.price===product2.price && product1.name===product2.name){
        return true;
    }
    else{
        return false;
    }
}

console.log(isSameProduct(product1,product2));
console.log("Good Morning".toLowerCase());
console.log('test'.repeat(2));