let display = document.querySelector(".result");
let preDisplay = document.querySelector(".pre-result");

function appendToDisplay(input) {
    display.innerHTML += input;
}

function clearDisplay() {
    display.innerHTML = "";
}

function calculate() {
    try {
        display.innerHTML = eval(display.innerHTML);
    }
    catch (error) {
        display.innerHTML = "Error!";
    }
}


