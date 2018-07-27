let state = "";
let mem = "";
let operation = "";

const disp = document.getElementsByClassName('display');
const calcMain = document.querySelector('.buttonGroup');

console.log(calcMain)


calcMain.addEventListener('click', buttonHandler);

function buttonHandler(event) {
    let target = event.target;
    if (target.className === "numBtn") {
        console.log('working');
      disp.innerText += target.innerText;
    }
}

function add(a, b) {
    mem = a + b;
}

function sub(a, b) {
    mem = a - b;
}

function div(a, b) {
    mem = a / b;
}

function mult(a, b) {
    mem = a * b;
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