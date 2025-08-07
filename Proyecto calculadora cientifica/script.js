let display = document.getElementById("display");
let expr = "";

function input(val) {
    if (display.innerText === "0" && val !== ".") {
        expr = "";
    }
    expr += val;
    display.innerText = expr;
}

function clearDisplay() {
    expr = "";
    display.innerText = "0";
}

function calculate() {
    try {
        let result = eval(expr);
        display.innerText = result;
        expr = result.toString();
    } catch {
        display.innerText = "Error";
        expr = "";
    }
}