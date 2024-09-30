let display=document.getElementById('display')

function clearDisplay(){
    display.value=' '
}

function deleteInput(){
    display.value=display.value.toString().slice(0,-1);
}

function appendOperator(operator){
    display.value +=operator;
}

function appendNumber(number){
    display.value +=number;
}

function calculate(){
    display.value=eval(display.value)
}