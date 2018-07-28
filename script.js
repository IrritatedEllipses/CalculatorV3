let state = "";
let mem = "";
let operation = "";

const display = document.querySelector('.display');
const calcMain = document.querySelector('.buttonGroup');

calcMain.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    let target = event.target;
    if (target.classList.contains('numBtn') && display.innerText.length < 8) {
        state += target.innerText;
        display.innerText = state;
    } else if (target.classList.contains('opBtn') && (state !== "")) {
        if (operation == "") {
            operation += target.id;
            mem = state;
            state = "";
            display.innerText = "0";
        } else {
            operate(target.id)



        }
    } else if (target.classList.contains('equal')) {
        operate(operator)
    } else if (target.classList.contains('clr')) {
        clear()
    } else {
        display.innerText = "Err";
    }
}

function operate(op) {
    switch (op) {
        case "add":
            console.log("adding");
            mem = add(parseFloat(mem), parseFloat(state));
            state = "";
            display.innerText = mem;
            operator = "";
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

function clear() {
    state = "";
    mem = "";
    display.innerText = "0";
    operator = "";
    console.log(state, mem, display.innerText, operator, "We're clear")
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    a - b;
}

function div(a, b) {
    a / b;
}

function mult(a, b) {
    return a * b;
}