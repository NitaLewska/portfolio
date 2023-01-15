let display = document.querySelector("#display");
console.log(display.innerHTML);
display.innerHTML = "0";
let equation = 0;
let firstNumber = 0;
let secondNumber = 0;
let sixthNumber = 0;
let seventhNumber = 0;
let eighthNumber = 0;
let ninthNumber = 0;
let result = "0";

document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener('click', numberInput);
}) 

document.querySelectorAll(".operator").forEach(function(button) {
    button.addEventListener('click', operatorInput);
}) 

document.querySelector("#equals").addEventListener('click', equals);

document.querySelector("#cce").addEventListener('click', start);

document.querySelector("#off").addEventListener('click', turnOff);

document.querySelector("#sq").addEventListener('click', sqRoot);

document.querySelector("#dot").addEventListener('click', dot);

function numberInput(e) {
    if (display.innerHTML == result){
        display.innerHTML = e.target.innerHTML;
        result = 0;
    } else if (display.innerHTML === '0'|| display.innerHTML === firstNumber) {
        display.innerHTML = e.target.innerHTML;
    } else {
        if (display.innerHTML.length<6) {
            display.innerHTML += e.target.innerHTML;}
        }
}

function operatorInput(e) {
    firstNumber = display.innerHTML;
    equation = display.innerHTML + e.target.innerHTML;
    console.log(equation, firstNumber);
}

function equals() {
    secondNumber = display.innerHTML;
    equation = equation + secondNumber;
    result = eval(equation).toString();
    equation=0;
    console.log(equation, secondNumber, result);
    roundNum();
    display.innerHTML = result;
    return result;
}

function start() {
    display.innerHTML = "0";
    equation = "0";
    firstNumber = "0";
    document.querySelectorAll("button").forEach( a => {
        a.removeAttribute('disabled');
    });
}

function turnOff() {
    display.innerHTML = '';
    equation = 0;
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    document.querySelectorAll("button").forEach( a => {
        a.setAttribute('disabled', true);
    });
    document.querySelector("#cce").removeAttribute('disabled');
}

function sqRoot() {
    result = Math.sqrt(display.innerHTML).toString();
    roundNum();
    display.innerHTML = result;
}

function roundNum() {
    sixthNumber = result.toString().split('')[5];
    seventhNumber = result.toString().split('')[6];
    eighthNumber = result.toString().split('')[7];
    ninthNumber = result.toString().split('')[8];
    
    if (result.toString().length>7) {
        if (seventhNumber === ".") {
            if (eighthNumber > 4) {
                result = parseInt(result.toString().slice(0,6)) + 1;
            }else{
                result = result.toString().slice(0,6)
            }
        }else if (eighthNumber === ".") {
            if (ninthNumber > 4) {
                result = parseInt(result.toString().slice(0,7)) + 1;
            }else{
                result = result.toString().slice(0,7)
            }            
        }else{
            if (eighthNumber > 4 && seventhNumber < 9) {
                seventhNumber=parseInt(result.toString().split('')[6])+1;
                result = result.toString().slice(0,6) + seventhNumber;
            }else{
                result = result.toString().slice(0,7)
            }               
        }  
    }
    return result;
}

function dot() {
    if (display.innerHTML == result || display.innerHTML === '0'){
        display.innerHTML = "0.";
        result = "0";
    } else {
        if (display.innerHTML.length<6) {
            display.innerHTML += ".";}
    }
}
