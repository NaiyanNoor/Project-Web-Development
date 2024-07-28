let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = null;
    previousNumber = '';
    updateDisplay();
}
