
function subscribe(){
    let button=document.querySelector('button');
button.addEventListener('click',()=>{
//  if(button.innerHTML==='Subscribe')
 if(button.innerText==='Subscribe')
    {
        // button.innerHTML="Subscribed"; 
    button.innerText="Subscribed";///if there is spaces the innerHTML does not work so we use innerText instead of innerHTML
    }
    else{
        // button.innerHTML="Subscribe";
        button.innerHTML='Subscribe';
    }
})

}
subscribe();