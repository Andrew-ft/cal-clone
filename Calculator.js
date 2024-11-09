let display = document.querySelector(".result");
let preShowDisplay = document.querySelector(".pre-result");
let calculationDone = false;
let button =document.getElementById("number")

function appendToDisplay(input) {
    display.innerHTML += input;
}

function clearDisplay() {
    display.innerHTML = "";
    preShowDisplay.innerHTML = "";
}

function calculate() {
    try {
        let preDisplay = display.innerHTML;
        preShowDisplay.innerHTML = preDisplay + "=";
        display.innerHTML = eval(display.innerHTML);
    }
    catch (error) {
        display.innerHTML = "Error!";
    }
}


