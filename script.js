
let display = document.querySelector("#textdisplay");

function displayAppend(value) {
    display.value += value;
}

function clearDis() {
    display.value = '';
}

function calculate() {
    let calculate = display.value;

    if (calculate.includes("/0")) {
        display.value = "Error";
    } else {
        display.value = eval(display.value);
    }
};
