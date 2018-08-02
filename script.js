let state = "";
let mem = "";
let op = "";
let readyFlag = false;

const display = document.querySelector('.display');
const calcMain = document.querySelector('.buttonGroup');

calcMain.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    let target = event.target;
    if (target.classList.contains ('numBtn') && (display.innerText.length < 10)) {
        state += parseFloat(target.innerText);
        display.innerText = state;
    }
    if (target.classList.contains('opBtn')) {
    //     if (!op) {
    //         if (!mem) {
    //         mem = state;
    //         state = "";
    //         op = target.id;
    //         }
    //         else if (mem) {
    //             op = target.id;
    //             state = "";
    //         }
    //     }
    //     else if (op) {
    //         operate(target.id);
    //     }
    // }
        if (!readyFlag) {
            mem = display.innerText;
            state = "";
            op = target.id;
            readyFlag = true;
        }
        else if (readyFlag) {
            op = target.id;
            operate(target.id)
            readyFlag = false;
            
        }
    }
    if (target.classList.contains('clr')) { clear(); }
    if (target.classList.contains('equal')) { operate(op); }
}

function operate(op) {
    switch (op) {
        case "add":
            mem = add(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        case "sub":
            mem = sub(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        case "divide":
            mem = divide(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        case "mult":
            mem = mult(parseFloat(mem), parseFloat(state));
            equalFinish();
            break;
        default:
            display.innerText = "Err";
    }
}

function equalFinish() {
    state = "";
    display.innerText = parseFloat(mem).toFixed(4);
    readyFlag = false;
}

function clear() {
    state = "";
    mem = "";
    display.innerText = "0";
    op = "";
    readyFlag = false;
    console.log(state, mem, display.innerText, op, "We're clear");
}

function error() {
    display.innerText = "ERROR";
    state = "";
    op = "";
    mem = "";
}

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mult(a, b) { return a * b; }
function divide(a, b) {
    if (b === "0") {
        error();
    } else {
        return a / b;
    }
}

function currentStates() {
    console.log(`Operator: ${op}, State: ${state}, Memory: ${mem}, ReadyFlag: ${readyFlag} `)
}