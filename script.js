let state = "";
let mem = "";
let operation = "";

const disp = document.getElementsByClassName('display');

function add(a, b) {
    state = a + b;
}

function sub(a, b) {
    state = a - b;
}

function div(a, b) {
    state = a / b;
}

function mult(a, b) {
    state = a * b;
}

function operate(op) {
    switch (op) {
        case "add":
            console.log("adding");
            add(parseFloat(mem), parseFloat(state));
            break;
        case "sub":
            sub(parseFloat(mem), parseFloat(state));
            break;
        case "div":
            div(parseFloat(mem), parseFloat(state));
            break;
        case "mult":
            mult(parseFloat(mem), parseFloat(state));
            break;
    }
}