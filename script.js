let state = "";
let mem = "";
let operation = "";
let answer = "";

const display = document.querySelector('.display');
const calcMain = document.querySelector('.buttonGroup');

calcMain.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    let target = event.target;
    if (target.classList.contains('numBtn') && display.innerText.length < 10) {
        state += target.innerText;
        display.innerText = state;
    } else if (target.classList.contains('opBtn')) {
        if (!operation) {
            if ((mem) && (state)){
                operate(target.id)
            } else if ((mem) && (!state)) {
                operation += target.id;
                state = "";
                
            }
        } else {
            operation = target.id;
            operate(target.id);

        }
    } else if (target.classList.contains('equal')) {
        if ((mem) && (state)) {
            operate(operation);
        } else {
            console.log("empty operation")
        }
    } else if (target.classList.contains('clr')) {
        clear();
    } else {
        display.innerText = "Err";
    }
}

function operate(op) {
    switch (op) {
        case "add":
            answer = add(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        case "sub":
            answer = sub(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        case "divide":
            answer = divide(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        case "mult":
            answer = mult(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
    }
}


function equalFinish() {
    state = "";
    mem = answer;
    display.innerText = answer;
    operation = "";
}

function clear() {
    state = "";
    mem = "";
    display.innerText = "0";
    operator = "";
    console.log(state, mem, display.innerText, operator, "We're clear");
}

function error() {
    display.innerText = "ERROR"
    clear()
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === "0") {
        error();
    } else {
        return a / b;
    }
}

function mult(a, b) {
    return a * b;
}