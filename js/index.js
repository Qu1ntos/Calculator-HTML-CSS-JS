const display = document.getElementById("display")

function ATD(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function percent(){
    display.value = eval(display.value / 100)
}

function changePN(){
    display.value = eval(display.value - display.value - display.value)
}