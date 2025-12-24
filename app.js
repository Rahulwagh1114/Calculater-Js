
let display=document.querySelector(".input");

function append(value){
    display.value+=value;
}

function clearDisplay(){
    display.value="";
}

function cancle(){
    display.value=display.value.slice(0,-1);
}


function calculate(){
    try{
        display.value=eval(display.value)
    }catch(err){
        console.log(err);
    }
}